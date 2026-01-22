import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonGrid, 
  IonRow, 
  IonCol,
  IonText
} from '@ionic/angular/standalone';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { WishlistItemComponent } from 'src/app/components/wishlist-item/wishlist-item.component';
import { WishlistInsightsComponent } from 'src/app/components/wishlist-insights/wishlist-insights.component';
import { addIcons } from 'ionicons';
import { heart, shareSocial, ellipsisVertical, arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    WishlistItemComponent,
    WishlistInsightsComponent
  ]
})
export class WishlistPage implements OnInit {
  wishlistProducts: Product[] = [];
  stats: any;

  constructor(
    private wishlistService: WishlistService,
    private productService: ProductService,
    private router: Router
  ) {
    addIcons({ heart, shareSocial, ellipsisVertical, arrowBack });
  }

  ngOnInit() {
    this.loadWishlist();
    this.wishlistService.wishlist$.subscribe(() => {
      this.loadWishlist();
    });
  }

  loadWishlist() {
    this.wishlistProducts = this.wishlistService.getWishlistProducts();
    this.stats = this.wishlistService.getStats();
  }

  onShareWishlist() {
    // Implement share functionality
    console.log('Sharing wishlist');
  }

  onMoreOptions() {
    // Implement more options functionality
    console.log('More options');
  }

  onBack() {
    // Implement back functionality
    console.log('Going back');
  }

  onStartShopping() {
    this.router.navigate(['/tabs/explore']);
  }
}