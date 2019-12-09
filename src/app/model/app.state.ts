import { ShoppingItem } from './shopping.model';
import { ShoppingState } from '../reducers/shopping.reducer';

export interface appState{
        readonly shopping:ShoppingState;
}