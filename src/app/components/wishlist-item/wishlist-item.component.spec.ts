import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistItemComponent } from './wishlist-item.component';
import { Product } from 'src/app/interfaces/product.interface';

describe('WishlistItemComponent', () => {
  let component: WishlistItemComponent;
  let fixture: ComponentFixture<WishlistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistItemComponent);
    component = fixture.componentInstance;
    
    // Set a mock product for testing
    component.product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      rating: 4.5,
      image: 'test-image.jpg',
      category_id: 1,
      seller_id: 1,
      default_price: 10,
      varieties: []
    } as Product;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});