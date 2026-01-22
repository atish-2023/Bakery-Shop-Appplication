import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonLabel, 
  IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-wishlist-insights',
  templateUrl: './wishlist-insights.component.html',
  styleUrls: ['./wishlist-insights.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonText
  ]
})
export class WishlistInsightsComponent implements OnInit {
  @Input() totalValue: string = '0.00';
  @Input() totalItems: number = 0;
  @Input() categories: number = 0;

  constructor() { }

  ngOnInit() {}
}