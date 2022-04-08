import { Component, Inject, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewUserComponent } from './users/new-user/new-user.component';
import { User, UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  // Getting Users from user.service
  ListUser!: User[];
  
  // Table Data
  displayedColumns: string[] = ['id', 'username', 'password'];
  dataSource = new MatTableDataSource(this.ListUser);
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  constructor(private UserService:UserService,private dialog: MatDialog) { }


  ngOnInit(): void {
    this.listUsers();
  }

    // List Users
    listUsers() 
    {
      this.UserService.getUsers().subscribe(
        res => {
          var a = res;
          console.log("reading from here!");
          console.log("La respuesta es a = " + a);
          console.log(res);
          this.ListUser=<any>res;
          this.dataSource.data = res as User[];
        },
        err => console.log(err)
      );
    }

    // List User
    listUser() {
      this.UserService.getUser("1").subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      );
    }

  // PopUps 
  onCreate() {
    this.dialog.open(NewUserComponent);
  }

  onDelete() {
    this.dialog.open(UsersComponent);
  }

  onEdit() {
    this.dialog.open(UsersComponent);
  }

}

