import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExplorePage } from './explore.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ExplorePage,
    RouterModule.forChild([
      {
        path: '',
        component: ExplorePage,
      }
    ])
  ]
})
export class ExplorePageModule {}