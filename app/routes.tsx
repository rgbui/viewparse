import * as  React from "react";
import { Route } from "react-router";
import { Login } from "site/login";
import { Reg } from "site/reg";
import { Index } from "./site";
export let routes = <Route path="/" component={Index} >
    <Route path="/login" component={Login} />
    <Route path="/reg" component={Reg} />
    <Route path='/view/:id' />
    <Route path='/user/:id'></Route>
</Route>;