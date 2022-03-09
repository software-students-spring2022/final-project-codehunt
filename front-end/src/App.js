import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
// import List from "./List"
// import Login from "./Login"
// import SignUp from "./SignUp"
// import ForgetPassword from "./ForgetPassword"
// import UserSettings from "./UserSettings"
import About from "./About"
import Header from "./Header"
import Contest from "./Contest"

const App = props => {
    return (
        <div className="App">
            <Router>
                <Header />
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        {/*<Route path="/List" element={<List />}></Route>*/}
                        {/*<Route path="/Login" element={<Login />}></Route>*/}
                        {/*<Route path="/SignUp" element={<SignUp />}></Route>*/}
                        {/*<Route path="/ForgetPassword" element={<ForgetPassword />}></Route>*/}
                        {/*<Route path="/UserSettings" element={<UserSettings />}></Route>*/}
                        <Route path="/About" element={<About />}></Route>
                    </Routes>
                </main>
            </Router>
        </div>
    )
};

export default App
