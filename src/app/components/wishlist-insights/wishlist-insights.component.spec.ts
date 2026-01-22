import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistInsightsComponent } from './wishlist-insights.component';

describe('WishlistInsightsComponent', () => {
  let component: WishlistInsightsComponent;
  let fixture: ComponentFixture<WishlistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});