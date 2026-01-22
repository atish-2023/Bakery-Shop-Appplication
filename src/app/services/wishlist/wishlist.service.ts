import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishlistItem } from 'src/app/interfaces/wishlist-item.interface';
import { WishlistCollection } from 'src/app/interfaces/wishlist-collection.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: WishlistItem[] = [];
  private wishlistCollections: WishlistCollection[] = [];
  private wishlistSubject = new BehaviorSubject<WishlistItem[]>([]);
  public wishlist$ = this.wishlistSubject.asObservable();

  constructor(private productService: ProductService) {
    this.loadFromLocalStorage();
  }

  // Load wishlist from localStorage
  private loadFromLocalStorage(): void {
    try {
      const storedItems = localStorage.getItem('wishlist_items');
      const storedCollections = localStorage.getItem('wishlist_collections');
      
      if (storedItems) {
        this.wishlistItems = JSON.parse(storedItems).map((item: any) => ({
          ...item,
          addedDate: new Date(item.addedDate)
        }));
      }
      
      if (storedCollections) {
        this.wishlistCollections = JSON.parse(storedCollections).map((collection: any) => ({
          ...collection,
          createdDate: new Date(collection.createdDate),
          lastModified: new Date(collection.lastModified),
          items: collection.items.map((item: any) => ({
            ...item,
            addedDate: new Date(item.addedDate)
          }))
        }));
      }
      
      this.wishlistSubject.next(this.wishlistItems);
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      this.wishlistItems = [];
      this.wishlistCollections = [];
    }
  }

  // Save wishlist to localStorage
  private saveToLocalStorage(): void {
    try {
      localStorage.setItem('wishlist_items', JSON.stringify(this.wishlistItems));
      localStorage.setItem('wishlist_collections', JSON.stringify(this.wishlistCollections));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }

  // Get all wishlist item IDs
  getWishlistIds(): number[] {
    return this.wishlistItems.map(item => item.productId);
  }

  // Get all wishlist products
  getWishlistProducts(): Product[] {
    const productIds = this.getWishlistIds();
    return productIds
      .map(id => this.productService.getProductById(id))
      .filter((product): product is Product => product !== null);
  }

  // Check if a product is in wishlist
  isInWishlist(productId: number): boolean {
    return this.wishlistItems.some(item => item.productId === productId);
  }

  // Add item to wishlist
  addItem(productId: number): void {
    if (!this.isInWishlist(productId)) {
      const newItem: WishlistItem = {
        productId,
        addedDate: new Date()
      };
      
      this.wishlistItems.push(newItem);
      this.wishlistSubject.next(this.wishlistItems);
      this.saveToLocalStorage();
    }
  }

  // Remove item from wishlist
  removeItem(productId: number): void {
    this.wishlistItems = this.wishlistItems.filter(item => item.productId !== productId);
    this.wishlistSubject.next(this.wishlistItems);
    this.saveToLocalStorage();
  }

  // Toggle item in wishlist
  toggleItem(productId: number): void {
    if (this.isInWishlist(productId)) {
      this.removeItem(productId);
    } else {
      this.addItem(productId);
    }
  }

  // Clear all items from wishlist
  clearAll(): void {
    this.wishlistItems = [];
    this.wishlistSubject.next(this.wishlistItems);
    this.saveToLocalStorage();
  }

  // Create a new collection
  createCollection(name: string): WishlistCollection {
    const newCollection: WishlistCollection = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      items: [],
      createdDate: new Date(),
      lastModified: new Date()
    };
    
    this.wishlistCollections.push(newCollection);
    this.saveToLocalStorage();
    return newCollection;
  }

  // Move item to collection
  moveToCollection(productId: number, collectionId: string): void {
    const collection = this.wishlistCollections.find(c => c.id === collectionId);
    if (collection && !collection.items.some(item => item.productId === productId)) {
      const wishlistItem = this.wishlistItems.find(item => item.productId === productId);
      if (wishlistItem) {
        collection.items.push(wishlistItem);
        collection.lastModified = new Date();
        this.saveToLocalStorage();
      }
    }
  }

  // Get wishlist statistics
  getStats() {
    const products = this.getWishlistProducts();
    const totalValue = products.reduce((sum, product) => sum + (product.default_price || 0), 0);
    const categories = [...new Set(products.map(p => p.category_id))].length;
    
    return {
      totalItems: products.length,
      totalValue: totalValue.toFixed(2),
      categories
    };
  }
}