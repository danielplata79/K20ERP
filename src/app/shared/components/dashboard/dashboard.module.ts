import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { StartComponent } from './start/start.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/new-user/new-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StartComponent,
    DataComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // NavigationComponent
  ],
  exports: [
    
  ]
})
export class DashboardModule { }
