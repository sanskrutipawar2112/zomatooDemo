import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealforoneComponent } from './mealforone.component';
import { MealforoneRoutingModule } from './mealforone-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [MealforoneComponent],
  imports: [
    CommonModule,MatIconModule,
    MealforoneRoutingModule,MatFormFieldModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),MatExpansionModule,MatIconModule
  ]
})
export class MealforoneModule { }
