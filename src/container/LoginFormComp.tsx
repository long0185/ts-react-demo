import { connect } from "dva"
import LoginForm from "../components/LoginForm"
import {ConnectState} from "../models/connect"
export default connect(({login}:ConnectState)=>({
    login
}))(LoginForm)