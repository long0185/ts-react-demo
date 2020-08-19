import React, { ReactElement } from 'react'
import {withRouter} from "dva/router"

interface Props {
    user:string,
    onChange(user:string|null):void
}

 function index(props: Props): ReactElement {
    return (
        <div>
            <span>欢迎你，</span>
            <span>{props.user}</span>
            <button 
            onClick={()=>{
               props.onChange(props.user)
            }}>
            {props.user!==null?"退出":"去登录"}</button>
        </div>
    )
}
export default index
