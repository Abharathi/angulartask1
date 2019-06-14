import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div class="app">
      <h1>{{ name }}</h1>
      <h2>$ {{ a }} </h2>
      <button (click)="handleClick2($event)"[disabled]='b' class="app1">Withdraw $10</button>
      <button (click)="handleClick1($event)" class="app2">Deposit $10</button>
    
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string;
  a:number=200;
  b:string;

  constructor(){
    this.name="My Account";
  }
  handleClick1(event: any){
    if(this.a>=0)
    this.b="";
    this.a=this.a+10;
  }
  handleClick2(event:any){
    if(this.a==10)
    this.b="disabled";
    this.a=this.a-10;
  }
}
