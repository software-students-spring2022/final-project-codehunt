import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home"
import List from "./List"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgetPassword from "./ForgetPassword"
import UserSettings from "./UserSettings"
import About from "./About"
import Header from "./Header"
import Contest from "./Contest"

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route path="/" element={<Home />}/>
                        <Route path="/List" element={<List />}/>
                        <Route path="/Login" element={<Login />}/>
                        <Route path="/SignUp" element={<SignUp />}/>
                        <Route path="/ForgetPassword" element={<ForgetPassword />}/>
                        <Route path="/UserSettings" element={<UserSettings />}/>
                        <Route path="/About" element={<About />}/>
                    </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App
