import { IAction, ActionType } from "./reducer";

export const logIn = (): IAction => ({
    type: ActionType.LogIn,
    payload: {}
})