import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<header class="banner">
    <h2>天橋教會 七天禁食禱告 9/14 ~ 9/21</h2>
  </header>
  <!-- Where router should display a view -->
  <router-outlet></router-outlet>`
  ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
