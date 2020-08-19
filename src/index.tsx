import dva from "dva"
import App from "./App"
import "./index.css"
import LoginModel from "./models/login"
import MallModel from "./models/mall"
import {createBrowserHistory} from "history"
const app = dva({
    history:createBrowserHistory()
})
app.model(LoginModel)
app.model(MallModel)
app.router(App)
app.start("#root")