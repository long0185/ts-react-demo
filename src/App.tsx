import React, { ReactElement, useState } from 'react'
import "./App.css"
import { routerRedux, Switch, Route } from "dva/router"
import Login from "./pages/Login"
import Layout from "./components/Layouts"
import Header from "./components/Header"
import Aside from "./components/Aside"
import PrivateRouter from "./components/router/PrivateRouter"
import List from "./pages/List"
import Home from "./components/Home"
import Add from "./pages/Add"
import NotFound from "./pages/404"
import Personal from "./pages/Personal"
import Setup from "./pages/setup"
function App(props: any): ReactElement {
  return (
    <routerRedux.ConnectedRouter history={props.history} >
      <Layout header={<Header />} aside={<Aside />}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <PrivateRouter path="/" exact  component={Home}></PrivateRouter>
          <Route path="/list" component={List}></Route>
          <Route path="/add" component={Add}></Route>
          <Route path="/personal" component={Personal}></Route>
          <Route path="/setup" component={Setup}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </routerRedux.ConnectedRouter>
  )
}
export default App
