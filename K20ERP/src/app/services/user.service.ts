import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ="http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  // Add User
  getUser() {
    return this.http.get(this.url);
  }

}