import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular Import
import { MaterialModule } from './material.module';

// Components 
import { LoginComponent } from './shared/components/login/login.component';
import { SharedModule } from './shared/components/shared/shared.module';

// Modules
//import { DashboardModule } from './shared/components/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    //DashboardModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }