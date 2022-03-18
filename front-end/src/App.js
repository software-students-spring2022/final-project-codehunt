import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import List from "./ContestList"
import Settings from "./Settings.js"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgetPassword from "./ForgetPassword"
import About from "./About"

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/list" exact component={List} />
                        <Route path="/settings" exact component={Settings} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/forgetPassword" exact component={ForgetPassword} />
                        <Route path="/about" exact component={About} />
                    </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App
