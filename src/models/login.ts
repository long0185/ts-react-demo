import { Reducer, Action, AnyAction } from "redux";
import { Effect, Subscription } from "dva";
import { Location } from "history";

export interface stateType {
    user: null | string,
    role?: "admin" | "guest" | "user"
}
export interface LoginModelType {
    namespace: string,
    state: stateType,
    reducers: {
        setLoginUser: Reducer<stateType>
    },
    effects: {
        login: Effect,
        logout: Effect
    },
    subscriptions: {
        asyncLocalStorage: Subscription,
    }
}
const model: LoginModelType = {
    namespace: "login",
    state: {
        user: null
    },
    reducers: {
        setLoginUser(state: stateType, action: AnyAction) {
            return {
                user: action.payload
            }
        }
    },
    effects: {
        *login({ payload }, { call, put }) {
            const { loginId, loginPwd } = payload
            if (loginId === "admin" && loginPwd === "123123") {
                yield put({ type: "setLoginUser", payload: loginId })
                localStorage.setItem("loginId", loginId)
                return true
            } else {
                return false
            }
        },
        *logout({ payload }, { put }) {
            localStorage.removeItem("loginId");
            yield put({ type: "setLoginUser", payload: null })
        }
    },
    subscriptions: {
        asyncLocalStorage({ dispatch, history }) {
            const loginId = localStorage.getItem("loginId")
            if (loginId) {
                dispatch({ type: "setLoginUser", payload: loginId })
            }
        },


    }
}
export default model