import { statement } from "@babel/template";

export interface IState {
    isLogged: boolean,
}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    isLogged: false,

};

export enum ActionType {
    LogIn = 'LOG_IN',
   
}

export const reducer = (state = initialState, action: IAction) => {
    
    switch (action.type) {
        case ActionType.LogIn: {
            return { ...state , isLogged:true};
            
        }
            
        default: {
            return state;
        }
    }
}