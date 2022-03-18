import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Home from "./Home"
import List from "./List"
import Login from "./Login"
import Signup from "./Signup"
import ForgetPassword from "./ForgetPassword"
import UserSettings from "./UserSettings"
import About from "./About"
import Header from "./Header"
import Settings from "./Settings"

const App = props => {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Helmet>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list" element={<List />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/forgetPassword" element={<ForgetPassword />}/>
            <Route path="/userSettings" element={<UserSettings />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
