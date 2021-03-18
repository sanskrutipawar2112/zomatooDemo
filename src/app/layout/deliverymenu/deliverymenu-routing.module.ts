import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliverymenuComponent } from './deliverymenu.component';

const routes: Routes = [
  {
      path: '',
      component: DeliverymenuComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DeliverymenuRoutingModule { }

