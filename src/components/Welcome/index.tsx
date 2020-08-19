import React, { ReactElement } from 'react'
import {Button} from "antd"


interface Props {
    history:any
}

export default function index(props: Props): ReactElement {
    return (
        <div>
            欢迎使用商城管理系统，请先登录<Button onClick={()=>{
                props.history.push("/login")   
            }}>去登录</Button>
        </div>
    )
}
