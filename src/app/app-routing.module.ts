/*****************************************************************************************************************************************************
 * Copyright 2021 Evan H. Harding. All Rights Reserved.
 *
 * This file handles navigation for the core application. The URLs defined here are the parent directories for the entire SPA. It enables navigation
 * from one view to the next as users perform application tasks. A change in the browser URL indicates an instruction to change the view to the
 * corresponding component.
 *
 * @see https://angular.io/guide/router Angular Router Guide
 *
 * @remarks The order of routes is important because the Angular Router uses a first-match wins strategy when matching routes, so more specific
 * routes should be placed above less specific routes. To render the routed view corresponding to a browser URL, use the router outlet HTML like so:
 * ```html
 *    <router-outlet></router-outlet>
 * ```
 ****************************************************************************************************************************************************/

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutModule } from '@about/about.module';

const ROUTES : Routes = [
  { path : 'FanFiction.com', pathMatch : 'full', redirectTo : '' },
  { path : '', pathMatch : 'full', redirectTo : 'about' },
  { path : 'about', loadChildren : async() : Promise<AboutModule> => await import('@about/about.module').then((aboutModule) => aboutModule.AboutModule) }
];

@NgModule({
  exports : [RouterModule],
  imports : [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule { }