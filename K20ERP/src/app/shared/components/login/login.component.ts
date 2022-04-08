import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  showFiller = false;
  currentFormCompo = "Home";

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getUsers!: User[];

  validateForm() {
    // const user = user.username;
  }

  ingresar() {
    const a  = JSON.stringify(this.form.value)
    console.log("este form es = a " + a);
    const user = this.form.value.user;
    const pass = this.form.value.password;

    if (user == "admin" && pass=="123456") {
      this.fakeLoading();
    } else {
      this.error();
    }
  }

    error() {
      this._snackBar.open("Wrong username or password, try again", "Close", {
        duration: 135000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      });
    }

    fakeLoading() {
      this.loading = true;
      setTimeout(() => {

        // Re-route
        this.router.navigate(["dashboard"]);
      }, 1500);
    }

    
}
