import React, { ReactElement } from 'react'
import "./index.css"
import { withRouter } from "dva/router"
import { connect } from "dva"
import { ConnectState } from "../../models/connect"

interface Props {
    header: React.ReactElement,
    aside: React.ReactElement,
}

function index(props: any): ReactElement {
   

    if (props.location.pathname === "/login") {
        return props.children
    }
    return (
        <div className="container">
            <header className="header">{props.header}</header>
            <aside className="aside">{props.aside}</aside>
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}
const layout = withRouter(index)
export default layout