import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.mode';
import { ShoppingItem } from '../model/shopping.model';

@Injectable()
export class ApiService{
    url='http://localhost:3000/api'
    constructor(private http:HttpClient){}

    PostItem(body:ShoppingItem):Observable<any>{
        console.log("bod",body);
        
            return this.http.post(this.url+'/products',body);
    }
    getItem():Observable<any>{
        console.log("runs getitem");
        
        return this.http.get(this.url+'/products');
    }
    putItem(id:string,body:ShoppingItem){
        return this.http.put(`${this.url}/products/${id}`,body);
    }
    deleteItem(id:string){
        console.log("rnter in delte",id);
        
            return this.http.delete(`${this.url}/products/${id}`);
    }
}