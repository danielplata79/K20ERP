import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

// Material Angular - Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDialogModule} from '@angular/material/dialog'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class SharedModule { }
