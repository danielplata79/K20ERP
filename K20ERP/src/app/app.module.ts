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
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { InformationComponent } from './shared/components/information/information.component';
import { UsersComponent } from './shared/components/dashboard/users/users.component';

// API 
import { HttpClientModule } from '@angular/common/http';

// Modules

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    InformationComponent
      //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    // NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UsersComponent]
})

export class AppModule { }