import { VegNonvegIndicatorComponent } from './../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import {
  IonCard,
  IonThumbnail,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, star } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [
    CommonModule,
    IonCard,
    IonThumbnail,
    IonImg,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    VegNonvegIndicatorComponent,
    RouterLink
  ],
})
export class ProductComponent implements OnInit {
  item = input<Product>();
  currency = Strings.currency;

  constructor(private wishlistService: WishlistService) {
    addIcons({
      star,
      heart,
    });
  }

  ngOnInit() {}

  toggleWishlist() {
    if (this.item()) {
      this.wishlistService.toggleItem(this.item()!.id);
    }
  }

  isInWishlist(): boolean {
    if (this.item()) {
      return this.wishlistService.isInWishlist(this.item()!.id);
    }
    return false;
  }
}
