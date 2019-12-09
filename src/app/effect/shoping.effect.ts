import { Injectable } from '@angular/core';
import{Effect,Actions,ofType} from '@ngrx/effects';
import { LoadShoppingAction, ShoppingActionType, LoadShoppingSuccessAction, LoadShoppingFailureAction, AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from '../actions/shopping.action';
import { ApiService } from '../shared/api.service';
import {mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ShoppingEffect{
    constructor(private action$:Actions,private shoppingService:ApiService){}
@Effect() loadShopping$ = this.action$
    .pipe(ofType<LoadShoppingAction>(ShoppingActionType.LOAD_ShOPPING),
    mergeMap(
        ()=> this.shoppingService.getItem()
            .pipe(
                map(data=>new LoadShoppingSuccessAction(data)),
                catchError(error=> of(new LoadShoppingFailureAction(error)))

            ),
        ),
    );

@Effect() addShoppingItem$ =this.action$
            .pipe(
                ofType<AddItemAction>(ShoppingActionType.ADD_ITEM),
                mergeMap(
                    (data)=>this.shoppingService.PostItem(data.payload)
                    .pipe(
                        map((newData)=> new AddItemSuccessAction(newData)),
                        catchError(error=>of(new AddItemFailureAction(error)))
                    ),
                ),
            );
@Effect() deleteShoppingItem = this.action$
    .pipe(
        ofType<DeleteItemAction>(ShoppingActionType.DELETE_ITEM),
        mergeMap(
            (data)=>this.shoppingService.deleteItem(data.payload)
            .pipe(
                map(()=>new DeleteItemSuccessAction(data.payload)),
                catchError(error=>of(new DeleteItemFailureAction(error)))
            )
        )
    )
}