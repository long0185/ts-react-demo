import React, { ReactElement } from 'react'
import Headerinfo from "../../container/LogininfoComp"
import "./index.css"

interface Props {

}

export default function index({ }: Props): ReactElement {
    return (
        <div className="headerstyle">

            <div className="headerleft"><h1>欢迎使用商城管理系统</h1></div>
            <div className="headerright"><Headerinfo></Headerinfo></div>
        </div>
    )
}
