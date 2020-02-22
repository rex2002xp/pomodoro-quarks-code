import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [HomeComponent],
    imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, CountdownModule]
})
export class HomeModule {}
