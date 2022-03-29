import React from "react"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Helmet} from "react-helmet"
import Header from "./Header"
import Home from "./Home"
import List from "./ContestList"
import Settings from "./Settings"
import Login from "./Login"
import SignUp from "./Signup"
import AccRecovery from "./AccRecovery"
import About from "./About"

const App = (props) => {
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
          <Route path="/settings" element={<Settings />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/account-recovery" element={<AccRecovery />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
