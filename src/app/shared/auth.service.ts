import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.mode';

@Injectable()
export class AuthService{
    constructor(private http:HttpClient){}

    login(val:User):Observable<any>{
            return this.http.post('http://localhost:3000/api/login',val);
    }
}