import { JsonPipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService]
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  addUser!: User[];

  constructor(private UserService:UserService, private fb: FormBuilder, private _snackBar: MatSnackBar ) { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', Validators.required]
    })
  } 

  ngOnInit(): void {
    
  }

  sendingData() {
    const username = this.form.value.username;
    const name = this.form.value.name;
    const password = this.form.value.password;
    const mail = this.form.value.mail;

    console.log("name: "+username);

    const user: User = {
      username: username,
      name: name,
      password: password,
      mail: mail
    }

    this.UserService.addUser(user).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }


  // List Users
  listUsers() 
  {
    this.UserService.getUsers().subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    );
  }





  
}
