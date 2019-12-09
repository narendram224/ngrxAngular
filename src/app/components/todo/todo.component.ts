import { Component, OnInit } from '@angular/core';
import {TodoClass} from '../../model/todo';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoReducer } from 'src/app/reducers/todo-reducer';
import { TodoRemove } from 'src/app/actions/todo.action';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todos:TodoClass;
  constructor(private store:Store<{todos:TodoClass}>) {
   
   }

  ngOnInit() {
     this.store.pipe(select('todos')).subscribe((value:TodoClass)=>{
      // console.log(value);
       this.todos = value ;
       console.log(value);
       
    })
  }
  TodoRem(index:number){
    this.store.dispatch(new TodoRemove(index));
  }
}
