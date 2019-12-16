import { statement } from "@babel/template";

export interface IState {
    isLogged: boolean,
    secret: string,
    cities: string[],
    ordersFee:string[]
}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    isLogged: false,
    secret: "",
    cities: [],
    ordersFee:[],
};

export enum ActionType {
    LogIn = 'LOG_IN',
    LogOut = 'LOG_OUT',
    GetSecret = 'GET_SECRET',
    SearchCities = 'SEARCH_CITIES',
    GetOrderFee = 'SEARCH_ORDER_FEE'

}

export const reducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case ActionType.LogIn: {
            return { ...state, isLogged: true };

        }
        case ActionType.GetOrderFee: {
            return {...state,ordersFee:action.payload}
            }
        case ActionType.LogOut: {
            return { ...state, isLogged: false, secret: '' };
        }

        case ActionType.GetSecret: {
            return { ...state, secret: action.payload }
        }
        case ActionType.SearchCities: {
            return { ...state, cities: action.payload }
        }

        default: {
            return state;
        }
    }
}