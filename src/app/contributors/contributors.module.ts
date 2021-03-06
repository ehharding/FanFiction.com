import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

import { ContributorsRoutingModule } from '@contributors/contributors-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ContributorsComponent } from '@contributors/contributors.component';

@NgModule({
  declarations : [ContributorsComponent],
  imports : [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    ContributorsRoutingModule,
    SharedModule
  ]
})
export class ContributorsModule { }
