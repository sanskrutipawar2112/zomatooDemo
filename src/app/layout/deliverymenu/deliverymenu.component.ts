import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliverymenu',
  templateUrl: './deliverymenu.component.html',
  styleUrls: ['./deliverymenu.component.scss']
})
export class DeliverymenuComponent implements OnInit {
  icon: boolean = false;menu;AcPrice ;
  public obj: object =null;
  public myArr=[];
  iteam =[];abc;TechnovatorsParticipantsDetail;requests;
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
 

  let obj= 'https://staging.pearpartner.com/restaurant/9999';
this.http.get(obj).subscribe(data => {

for( let i in data) {   //Pay attention to the 'in'
console.log(data[i]);
this.myArr.push(data[i]);
}
});

  }

  click(){
    this.icon = !this.icon;
  }

}
