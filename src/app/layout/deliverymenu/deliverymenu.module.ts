import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverymenuComponent } from './deliverymenu.component';
import { DeliverymenuRoutingModule } from './deliverymenu-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DeliverymenuComponent],
  imports: [
    CommonModule,
    DeliverymenuRoutingModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),MatIconModule,MatFormFieldModule,MatExpansionModule
  ]
})
export class DeliverymenuModule { }
