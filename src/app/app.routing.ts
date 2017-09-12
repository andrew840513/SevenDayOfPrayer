import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppHomeComponent} from './app.home';
import {AppSignupComponent} from './app.signup';

const appRoutes: Routes = [
  {path: 'signup', component: AppSignupComponent},
  {path: '', component: AppHomeComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '**', component: AppHomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
