import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonCard, 
  IonCardContent, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/product.interface';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { addIcons } from 'ionicons';
import { heart, star } from 'ionicons/icons';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon
  ]
})
export class WishlistItemComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private wishlistService: WishlistService,
    private router: Router
  ) {
    addIcons({ heart, star });
  }

  ngOnInit() {}

  onRemoveFromWishlist(event: Event) {
    event.stopPropagation();
    if (this.product && this.product.id) {
      this.wishlistService.removeItem(this.product.id);
    }
  }

  onViewProduct() {
    if (this.product && this.product.id) {
      this.router.navigate(['/tabs/products', this.product.id]);
    }
  }
}