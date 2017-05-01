import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template: `
  <div class="container">
  <h3>{{month}}/{{day}}/{{year}}</h3>
  <h1>Receipe book</h1>
  <ul>
  <li *ngFor="let currentReceipe of receipes">{{currentReceipe.name}}:        <ol>
  <li>{{currentReceipe.ingredients[0]}}</li><li> {{currentReceipe.ingredients[1]}}</li></ol></li>
  </ul>
  </div>
  `
})
export class AppComponent{
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
      receipes: Receipe[]=[
        new Receipe('muffin',['bread', 'chocolate chips']),
        new Receipe('cheese', ['milk', 'bacteria']),
        new Receipe('Rob', ['jerk'])
      ];
}
export class Receipe {
  constructor(public name:string, public ingredients:string[]){}
}
