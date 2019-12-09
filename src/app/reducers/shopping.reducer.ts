import { ShoppingItem } from "../model/shopping.model";
import { ShoppingAction, ShoppingActionType } from '../actions/shopping.action';
export interface ShoppingState{
    list:ShoppingItem[],
    loading:boolean,
    error:Error
}

    const initialState:ShoppingState={
        loading:false,
        list:[],
         error:undefined
    };

    export function ShoppingReducer(state:ShoppingState = initialState,action:ShoppingAction){
        switch (action.type) {
            case ShoppingActionType.LOAD_ShOPPING:
                return {
                    ...state,
                    loading:true
                };
            case ShoppingActionType.LOAD_ShOPPING_SUCCESS:
                console.log("the dta fro api",action.payload);
                
                return {
                    ...state,
                    list:action.payload,
                    loading:false
                }
            case ShoppingActionType.LOAD_ShOPPING_FAILURE:
                    console.log("the dta api",action.payload);
                return {
                    ...state,
                    error:action.payload,
                    loading:false
                }
            case ShoppingActionType.ADD_ITEM:
                return {
                    ...state,
                    loading:true
                };
            
            case ShoppingActionType.ADD_ITEM_SUCCESS:
                    console.log("in reduer after successadd",{...state});
                    
                return {...state,
                    list:[...state.list,action.payload],
                    loading:false
                }

            case ShoppingActionType.ADD_ITEM_FAILURE:
                return {
                    ...state,
                    error:action.payload,
                    loading:false
                } 
                case ShoppingActionType.DELETE_ITEM:
                        return {
                            ...state,
                            loading:true
                        };
            case ShoppingActionType.DELETE_ITEM_SUCCESS:
                const    mylist = state.list.filter(item=>item._id!==action.payload);
                console.log(mylist);
                
                return {...state,
                    list:state.list.filter(item=>item._id!==action.payload),loading:false};  
            case ShoppingActionType.DELETE_ITEM_FAILURE:
                    console.log("delte failed",action.payload);
                    
                        return {
                            ...state,
                            error:action.payload,
                            loading:false
                        } 
            default:
                return state;
        }   
    }