import { statement } from "@babel/template";

export interface IState {
    isLogged: boolean,
    secret: string,
}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    isLogged: false,
    secret: "",

};

export enum ActionType {
    LogIn = 'LOG_IN',
    LogOut = 'LOG_OUT',
    GetSecret = 'GET_SECRET',

}

export const reducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case ActionType.LogIn: {
            return { ...state, isLogged: true };

        }
        case ActionType.LogOut: {
            return { ...state, isLogged: false, secret: '' };
        }
        case ActionType.GetSecret: {
            return { ...state, secret: action.payload }
        }

        default: {
            return state;
        }
    }
}