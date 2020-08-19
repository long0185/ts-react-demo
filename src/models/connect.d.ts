import { stateType } from './login'
import {mallStateType} from "./mall"
export interface ConnectState {
    login: stateType,
    mall:mallStateType
}