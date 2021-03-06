/*****************************************************************************************************************************************************
 * This module contains all commonly used components, directives, modules, and pipes that are used across the application.
 *
 * {@link https://angular.io/guide/sharing-ngmodules#sharing-modules | Angular Sharing Modules Guide}
 ****************************************************************************************************************************************************/

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  exports : [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class SharedModule { }
