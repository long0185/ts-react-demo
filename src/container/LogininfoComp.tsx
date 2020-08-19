import React, { ReactElement, Dispatch } from 'react'
import LoginInfo from "../components/Headinfo"
import {connect}from"dva"
import {ConnectState} from "../models/connect"
import {routerRedux}from "dva/router"


const mapStateToProps=(state:ConnectState)=>{
    return {
        user:state.login.user
    }
}
const mapDispatchToProps = (dispatch:any)=>({
    onChange(user:any){
        if(user==null){
            dispatch(routerRedux.push("/login"))
        }else{
            dispatch({type:"login/logout"})
            dispatch(routerRedux.push("/login"))
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(LoginInfo)
