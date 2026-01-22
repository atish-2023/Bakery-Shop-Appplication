import { TestBed } from '@angular/core/testing';
import { WishlistService } from './wishlist.service';
import { ProductService } from '../product/product.service';
import { Product } from 'src/app/interfaces/product.interface';

describe('WishlistService', () => {
  let service: WishlistService;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById']);

    TestBed.configureTestingModule({
      providers: [
        WishlistService,
        { provide: ProductService, useValue: productServiceSpy }
      ]
    });

    service = TestBed.inject(WishlistService);
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to wishlist', () => {
    // Arrange
    const productId = 1;
    
    // Act
    service.addItem(productId);
    
    // Assert
    expect(service.isInWishlist(productId)).toBeTrue();
    expect(service.getWishlistIds()).toContain(productId);
  });

  it('should remove item from wishlist', () => {
    // Arrange
    const productId = 1;
    service.addItem(productId);
    
    // Act
    service.removeItem(productId);
    
    // Assert
    expect(service.isInWishlist(productId)).toBeFalse();
    expect(service.getWishlistIds()).not.toContain(productId);
  });

  it('should toggle item in wishlist', () => {
    // Arrange
    const productId = 1;
    
    // Act & Assert
    service.toggleItem(productId);
    expect(service.isInWishlist(productId)).toBeTrue();
    
    service.toggleItem(productId);
    expect(service.isInWishlist(productId)).toBeFalse();
  });

  it('should get wishlist products', () => {
    // Arrange
    const productId = 1;
    const mockProduct = { id: 1, name: 'Test Product' } as Product;
    productService.getProductById.and.returnValue(mockProduct);
    service.addItem(productId);
    
    // Act
    const products = service.getWishlistProducts();
    
    // Assert
    expect(products.length).toBe(1);
    expect(products[0]).toEqual(mockProduct);
  });

  it('should clear all items from wishlist', () => {
    // Arrange
    service.addItem(1);
    service.addItem(2);
    
    // Act
    service.clearAll();
    
    // Assert
    expect(service.getWishlistIds().length).toBe(0);
  });
});