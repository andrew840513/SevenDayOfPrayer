import {NgModule} from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppHomeComponent} from './app.home';
import {AppSignupComponent} from './app.signup';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppSignupComponent
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
}
