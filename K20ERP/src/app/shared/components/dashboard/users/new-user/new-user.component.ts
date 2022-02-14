import { Component, OnInit, } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService]
})
export class NewUserComponent implements OnInit {

  constructor(private UserService:UserService ) { }

  ngOnInit(): void {
    this.listUsers();
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
