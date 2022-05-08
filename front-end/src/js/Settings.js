import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import BootstrapSwitchButton from "bootstrap-switch-button-react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Button } from "react-bootstrap"
import "../stylesheets/Settings.css"
import { Navigate } from "react-router"
import axios from "axios"

export default function Settings(props) {
  const [listOfItems, setListOfItems] = useState([])
  const jwtToken = localStorage.getItem("token")

  const [response, setResponse] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(
      jwtToken !== "null" && jwtToken !== null,
  )
  const [userID, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const updateListOfItems = (itemIndex, newsChecked) => {
    const updatedListOfItems = [...listOfItems]
    updatedListOfItems[itemIndex].isChecked = newsChecked
    setListOfItems(updatedListOfItems)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const index = 0
    const changedData = {
      subscriptions: listOfItems,
      id: userID,
      password: e.target.password.value,
    }
    setPassword(e.target.password.value)
    const responsePost = await axios.post(
        `${process.env.REACT_APP_BACKEND}/edit`,
        changedData,
    )
    setResponse(responsePost.data)
  }
  const handleChecked= async (e) => {
    console.log(e.name)
  }


  const handlePassword = async(e) => {
    e.preventDefault()
    const changedData = {
      id: userID,
      password: e.target.password2.value,
    }
    setPassword(e.target.password2.value)
    const responsePost = await axios.post(
      `${process.env.REACT_APP_BACKEND}/editPass`,
      changedData,
    )
    setResponse(responsePost.data)
  }

  useEffect(() => {
    let unmounted = false
    axios
        .get(`${process.env.REACT_APP_BACKEND}/userSettings`, {
          headers: { Authorization: `JWT ${jwtToken}` },
        })
        .then((res) => {
          setListOfItems(res.data.user.subscription)
          setUserId(res.data.user.id)
        })
        .catch((err) => {
          console.log(
              "The server rejected the request for this protected resource... we probably do not have a valid JWT token.",
          )
          setIsLoggedIn(false)
        })
    return () => {
      unmounted = true
    }
  }, [])

  if (!isLoggedIn) {
    localStorage.removeItem("token")
    return (
      <Navigate to="/login?error=protected" replace={true} state={{ isLoggedIn: false }} />
    )
  } else {
    return (
      <div className='settings'>
        <h1 className ="setting">Change password</h1>
      
        <Form id="info" onSubmit= { handlePassword }>
          <Form.Group className="info">
            <Form.Label className="new Password">New password</Form.Label>
            <br></br>
            <Form.Group as={Col} controlId='password1' size='lg'>
              <Form.Control type="password-change" placeholder="Enter password"/>
            </Form.Group>
          </Form.Group>
          <Form.Group className="info">
            <Form.Label className="password">Confirm new password</Form.Label>
            <br></br>
            <Row className="password-info">
              <Form.Group as={Col} controlId='password2' size='lg'>
                <Form.Control type="password-change" placeholder="Enter password"/>
              </Form.Group>
              <p></p>
            </Row>
          </Form.Group>
          <div className="col-md-10 text-center">
                <Button variant="outline-light" size="sm" type="submit">Reset</Button>
          </div>
        </Form>
        <Form id="info" onSubmit= { handleSubmit }>
          <h1 className="setting">Subscriptions</h1>
          <Form.Group className="subs">
            <p>If you wish to unsubscribe,
              check the appropriate subscription and click save changes</p>
            <div className="subscriptions">
              <Form.Group>
                {listOfItems.map((item, index) =>
                  <Form.Check
                    key={index}
                    label = {item.name}
                    name = {item.name}
                    checked={item.isChecked}
                    onChange={() =>
                      updateListOfItems(index, !item.isChecked)}
                  />,
                )}
                {/* <Form.Check onChange = { handleChecked } name = "leetcode" label="Leetcode"/>
                <Form.Check label="Hackerrank"/> */}
              </Form.Group>
            </div>
          </Form.Group>
          <div className="col-md-10 text-center">
            <Button variant="outline-light" size="sm" type="submit">Save Changes</Button>
          </div>
          <br></br>
          <h1 className="setting">Email Notifications</h1>
          <div className="bootbutton">
            <BootstrapSwitchButton checked={true} size="sm"/>
          </div>
        </Form>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}
