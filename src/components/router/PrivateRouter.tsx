import React, { ReactElement } from 'react'
import { Route, Redirect } from "dva/router"
import {connect} from "dva"
import {ConnectState} from "../../models/connect"

interface Props {

}
 function PrivateRouter(props: any): ReactElement {
    const {user} =props.login;
    const { path, component: Component } = props
    return (
        <Route path={path} render={(vals) => {
            if (user) {
                return <Component />
            } else {
                return <Redirect
                    to={
                        {
                            pathname: "/login",
                            state: vals.location.state
                        }
                    }
                ></Redirect>
            }
        }}>

        </Route>
    )
}
export default connect(({login}:ConnectState)=>({login}))(PrivateRouter)
