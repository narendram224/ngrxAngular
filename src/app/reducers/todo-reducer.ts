import {TodoClass} from '../model/todo';
import {ActionParent} from '../actions/todo.action';
import { TodoActionTypes } from '../shared/enum/todo-enum.action';
import { Observable } from 'rxjs';
export const initialState:TodoClass[]=[
    {title:"Todo 1"},
    {title:"Todo 2"},
    {title:"Todo 3"},
]

export function TodoReducer(state=initialState,action:ActionParent){
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state,action.payload]
        case TodoActionTypes.Remove:
                     [...state.splice(action.payload,1)];
                  return [...state];
    
        default:
            return state;
    }
}
    
