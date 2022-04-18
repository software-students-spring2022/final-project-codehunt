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
<<<<<<< HEAD
  const [userID,setUserId] = useState('');
  const [password, setPassword] = useState('');
=======
  const [userID, setUserId] = useState("")
>>>>>>> origin
  const updateListOfItems = (itemIndex, newsChecked) => {
    const updatedListOfItems = [...listOfItems]
    updatedListOfItems[itemIndex].isChecked = newsChecked
    setListOfItems(updatedListOfItems)
  }

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    e.preventDefault();
    let index = 0;
=======
    e.preventDefault()
    const index = 0
    console.log(userID)
>>>>>>> origin
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


  useEffect(() => {
    let unmounted = false
    axios
<<<<<<< HEAD
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
=======
        .get(`${process.env.REACT_APP_BACKEND}/userSettings`, {
          headers: { Authorization: `JWT ${jwtToken}` },
        })
        .then((res) => {
          setListOfItems(res.data.user.subscription)
          setUserId(res.data.user.id)
          console.log(userID)

          console.log(listOfItems)
        })
        .catch((err) => {
          console.log(
              "The server rejected the request for this protected resource... we probably do not have a valid JWT token.",
          )
          setIsLoggedIn(false)
        })
>>>>>>> origin
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
        <h1 className ="setting">User Settings</h1>
        <Form id="info" onSubmit= { handleSubmit }>
          <Form.Group className="info">
            <Form.Label className="name">Name</Form.Label>
            <br></br>
            <Row className="name-info">
              <Form.Group as={Col} controlId='name-info' size='lg'>
                <Form.Control type='name-change' placeholder="Enter name"/>
              </Form.Group>
              <Form.Group as={Col} controlId="nameButton">
                <Button variant="outline-light" size="sm">Edit</Button>
              </Form.Group>
            </Row>
            <Form.Label className="email">Email Address</Form.Label>
            <br></br>
            <Row className="email-info">
              <Form.Group as={Col} controlId='email' size='lg'>
                <Form.Control type="email-change" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group as={Col} controlId="emailButton">
                <Button variant="outline-light" size="sm">Edit</Button>
              </Form.Group>
            </Row>
            <Form.Label className="password">Password</Form.Label>
            <br></br>
            <Row className="password-info">
              <Form.Group as={Col} controlId='password' size='lg'>
                <Form.Control type="password-change" placeholder="Enter password"/>
              </Form.Group>
              <Form.Group as={Col} controlId="passwordButton">
                <Button variant="outline-light" size="sm">Reset</Button>
              </Form.Group>
            </Row>
          </Form.Group>
          <Form.Group className="subs">
            <section className="container">
              <h2 className="subs">Subscriptions</h2>
            </section>
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
          <h3 className="notifs">Email Notifications</h3>
          <div className="bootbutton">
            <BootstrapSwitchButton checked={true} size="sm"/>
          </div>
          <div className="col-md-10 text-center">
            <Button variant="outline-light" size="sm" type="submit">Save Changes</Button>
          </div>
        </Form>
      </div>
    )
  }
}
