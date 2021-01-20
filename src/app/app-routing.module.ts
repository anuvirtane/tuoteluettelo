import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhonesListComponent} from './phones-list/phones-list.component';
import {ItemComponent} from './item/item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/phones-list', pathMatch: 'full' },
  { path: 'phones-list', component: PhonesListComponent },
  { path: 'item/:id', component: ItemComponent }

];

@NgModule({

  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
