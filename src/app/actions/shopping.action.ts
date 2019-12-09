import { Action } from '@ngrx/store';
import { ShoppingItem } from '../model/shopping.model';

export enum ShoppingActionType{
    LOAD_ShOPPING = '[Shopping] Load Shopping',
    LOAD_ShOPPING_SUCCESS = '[Shopping] Load Shopping success',
    LOAD_ShOPPING_FAILURE = '[Shopping] Load Shopping delete',
    ADD_ITEM = '[Shopping] Add Item',
    ADD_ITEM_SUCCESS = '[Shopping] Add Item success',
    ADD_ITEM_FAILURE = '[Shopping] Add Item failure',
    DELETE_ITEM = '[Shopping] Delete Item',
    DELETE_ITEM_SUCCESS = '[Shopping] Delete Item success',
    DELETE_ITEM_FAILURE = '[Shopping] Delete Item delete'

}

export class LoadShoppingAction implements Action{
    readonly type= ShoppingActionType.LOAD_ShOPPING;
}
export class LoadShoppingSuccessAction implements Action{
    readonly type  = ShoppingActionType.LOAD_ShOPPING_SUCCESS;
    constructor(public payload:ShoppingItem){}
}
export class LoadShoppingFailureAction implements Action{
    readonly type  = ShoppingActionType.LOAD_ShOPPING_FAILURE;
    constructor(public payload:ShoppingItem){}
}
export class AddItemAction implements Action{
    readonly type  = ShoppingActionType.ADD_ITEM;
    constructor(public payload:ShoppingItem){console.log("in construct",payload);
    }
}
export class AddItemSuccessAction implements Action{
    readonly type  = ShoppingActionType.ADD_ITEM_SUCCESS;
    constructor(public payload:ShoppingItem){console.log("succesfully loaded data",payload);
    }
}
export class AddItemFailureAction implements Action{
    readonly type  = ShoppingActionType.ADD_ITEM_FAILURE;
    constructor(public payload:Error){}
}


export class DeleteItemAction implements Action{
    readonly type  = ShoppingActionType.DELETE_ITEM;
    constructor(public payload:string){}
}

export class DeleteItemSuccessAction implements Action{
    readonly type  = ShoppingActionType.DELETE_ITEM_SUCCESS;
    constructor(public payload:string){}
}

export class DeleteItemFailureAction implements Action{
    readonly type  = ShoppingActionType.DELETE_ITEM_FAILURE;
    constructor(public payload:Error){}
}
export type ShoppingAction = 
|  LoadShoppingAction
|   LoadShoppingSuccessAction
|   LoadShoppingFailureAction
|    AddItemAction 
|   AddItemSuccessAction
|   AddItemFailureAction
|    DeleteItemAction
|   DeleteItemSuccessAction
|DeleteItemFailureAction;
