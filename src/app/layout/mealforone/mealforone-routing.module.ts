import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MealforoneComponent } from './mealforone.component';

const routes: Routes = [
  {
      path: '',
      component: MealforoneComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MealforoneRoutingModule { }

