import {ISearchConditon} from "../models/mall"
import qs from "query-string"
import axios from "axios"
export class MallService{
    static async fetchGoos(condition:ISearchConditon){
        const params = qs.stringify(condition)
       return await axios.get("/api/mall?"+params)
    }
    static async saveGoods(obj:object){
       return await axios.post("/api/mall",obj)
    }
}