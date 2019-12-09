import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoClass } from 'src/app/model/todo';
import { TodoAdd } from '../../actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private store:Store<{todos:TodoClass[]}>) { }

  ngOnInit() {
  }
AddTodo(todo:string){
  let newTodo = new TodoClass();  
  newTodo.title = todo;
  // console.log(typeof(newTodo));
  
    this.store.dispatch(new TodoAdd(newTodo));
}
}
