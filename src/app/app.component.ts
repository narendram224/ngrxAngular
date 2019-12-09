import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appState } from './model/app.state';
import { Observable } from 'rxjs';
import { ShoppingItem } from './model/shopping.model';
import {v4 as uuid} from 'uuid';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './actions/shopping.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shopping list';
ShoppingItem$:Observable<Array<ShoppingItem>>;
newShppingItem :ShoppingItem = {_id:'',title:''};
loading$:Observable<boolean>;
error$:Observable<Error>;


  constructor(private store:Store<appState>){}
  
    ngOnInit():void{
      this.ShoppingItem$ = this.store.pipe(select(store=>store.shopping.list));
       this.ShoppingItem$.subscribe(item=>console.log(item)
       )
      this.loading$ = this.store.select(store=>store.shopping.loading);
      this.error$ = this.store.select(store=>store.shopping.error);
      this.store.dispatch(new LoadShoppingAction());
    }

    addItem(){
      // this.newShppingItem.id = uuid();
      this.store.dispatch(new AddItemAction(this.newShppingItem));
      this.newShppingItem ={_id:"",title:""};
    }

    deleteItem(id:string){
        this.store.dispatch(new DeleteItemAction(id));
    }
}
