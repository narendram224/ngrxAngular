import { Tutorial } from '../model/toturial.model';
import { AddTutorial, Add_Tutorial } from '../actions/tutorial.action';

const initialState:Tutorial = {
        name:'goolge',
        url:'http://google.co.in'
}
export function reducer(state:Tutorial[]=[initialState],action:AddTutorial){
    switch (action.type) {
        case Add_Tutorial:
            return [...state,action.payload];
    
        default:
            return state;
    }
}