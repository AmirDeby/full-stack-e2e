import { IAction, ActionType } from "./reducer";
import Axios from 'axios';
import { Dispatch } from "redux";

// logIn action creator
export const logIn = (userName: string, password: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const response = await Axios.post('http://localhost:4000/login', {
            userName,
            password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token);

        dispatch({
            type: ActionType.LogIn,
            payload: {}
        })
    }
}

export const getSecret = () => {
    return async (dispatch: Dispatch<IAction>) => {
        const token = localStorage.getItem('token')

        const response = await Axios.get(`http://localhost:4000/secret?token=${token}`)

        dispatch({
            type: ActionType.GetSecret,
            payload: response.data
        })
    }

}

export const logOut = (): IAction => {
    localStorage.removeItem('token')
    return {
        type: ActionType.LogOut,
        payload: {}
    }
}