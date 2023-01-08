import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ="http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  // List all users
  getUsers() {
    return this.http.get(this.url+'/models/user');
  }

  // Get user
  getUser(id:string) {
    return this.http.get(this.url+'/'+id);
  }

  ifRegistered(username:string,password:string) {
    return this.http.post(this.url, username && password);
  }

  // Add user
  addUser(user:User) {
    return this.http.post(this.url+'/models/user', user);
  }

  // Delete user
  delUser(id:string) {
    return this.http.delete(this.url+'/'+id);
  }

  // Edit user
  editUser(id:string, user:User) {
    return this.http.put(this.url+'/'+id, user);
  }
}

// Interface for dashboard component table 
export interface User {
  id?:string;
  username?:string;
  name?:string;
  password?:string;
  mail?:string;
};