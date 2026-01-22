import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardContent,
  IonText,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { addIcons } from 'ionicons';
import { star, chevronDown } from 'ionicons/icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonImg,
    IonCardContent,
    IonText,
    IonIcon,
    IonButton,
  ]
})
export class ExplorePage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  showLoadMore = true;
  searchTerm = '';
  selectedCategory: string | number = 'all';
  sortBy = 'newest';
  
  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    addIcons({ star, chevronDown });
  }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
    this.applyFilters();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
    this.applyFilters();
  }

  onSortChange(event: any) {
    this.sortBy = event.detail.value;
    this.applyFilters();
  }

  applyFilters() {
    // Start with all products
    let result = [...this.products];
    
    // Apply search filter
    if (this.searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (this.selectedCategory !== 'all') {
      result = result.filter(product => 
        product.category_id === Number(this.selectedCategory)
      );
    }
    
    // Apply sorting
    switch (this.sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.default_price || 0) - (b.default_price || 0));
        break;
      case 'price-high':
        result.sort((a, b) => (b.default_price || 0) - (a.default_price || 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        // Assuming products are already in desired order
        break;
    }
    
    // Apply pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredProducts = result.slice(startIndex, endIndex);
    
    // Check if we should show load more button
    this.showLoadMore = result.length > endIndex;
  }

  loadMore() {
    this.currentPage++;
    this.applyFilters();
  }

  openProduct(productId: number) {
    this.router.navigate([`/tabs/products/${productId}`]);
  }
}