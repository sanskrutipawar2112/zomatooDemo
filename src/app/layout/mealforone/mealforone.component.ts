import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mealforone',
  templateUrl: './mealforone.component.html',
  styleUrls: ['./mealforone.component.scss']
})
export class MealforoneComponent implements OnInit {
  icon: boolean = false;
  panelOpenState = false;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  click(){
    this.icon = !this.icon;
  }
}
