import { Effect, Subscription } from "dva";
import { AnyAction, Reducer } from "redux";
import { ConnectState } from "./connect"
import { MallService } from "../service/MallService"

export interface Goods {
    id: number,
    name: string,
    price: number,
    category: string,
    stock: number,
    poster: string,
    area: string,
}
export interface ISearchConditon {
    limit: number,
    page: number,
    key: string
}
export interface mallStateType {
    data: any[],
    searchCondition: ISearchConditon
    total: number
}
export interface MallModelType {
    namespace: 'mall',
    state: mallStateType,
    reducers: {
        setCondition: Reducer<mallStateType>,
        setGoods: Reducer<mallStateType>
    },
    effects: {
        fetchGoods: Effect
    },
    subscriptions: {
        firstFetch: Subscription
    }
}
const model: MallModelType = {
    namespace: "mall",
    state: {
        data: [],
        searchCondition: {
            limit: 5,
            page: 1,
            key: ""
        },
        total: 0
    },
    reducers: {
        setGoods(state: mallStateType, { payload }: AnyAction) {
            return {
                ...state,
                data: payload.data,
                total: payload.total
            }
        },
        setCondition(state: mallStateType, action: AnyAction) {
            return {
                ...state,
                searchCondition: action.payload
            }
        }
    },
    effects: {
        *fetchGoods(action, { select, call, put }) {
            try {
                const condition = yield select((state: ConnectState) => state.mall.searchCondition)
                const result = yield call(MallService.fetchGoos, condition)
                const { data } = result;
                yield put({ type: "setGoods", payload: { data: data.data, total: data.total } })
            } catch{
                console.log("dva err")
            }

        }
    },
    subscriptions: {
        firstFetch({ dispatch }) {
            dispatch({ type: "fetchGoods" })
        }
    }
}
export default model