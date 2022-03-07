import {BrowserRouter as Router, Routes, Route } from "react-browser-dom"
import Home from "./Home"
import UserSettings from "./UserSettings"
import Header from "./Header"
import List from "./List"
import AboutUs from "./AboutUs"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgetPassword from "./ForgetPassword"

const App = props => {
    return (
      <div className="App">
        <Router>
          <Header />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/List" element={<List />}></Route>
              <Route path="/UserSettings" element={<UserSettings />}></Route>
              <Route path="/AboutUs" element={<AboutUs />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/SignUp" element={<SignUp />}></Route>
              <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>

            </Routes>
          </main>
        </Router>
      </div>
    )
  }