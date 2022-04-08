import React, {useState, useEffect} from "react"
import {Navigate, useSearchParams} from "react-router-dom"
import axios from "axios"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "../stylesheets/Login.css"

export default function Login() {
  const [urlSearchParams] = useSearchParams() // get access to the URL query string parameters

  // create state variables to hold username and password
  const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
  const [errorMessage, setErrorMessage] = useState("")

  // if the user got here by trying to access our Protected page, there will be a query string parameter called 'error' with the value 'protected'
  useEffect(() => {
    const qsError = urlSearchParams.get("error") // get any 'error' field in the URL query string
    if (qsError === "protected") {
      setErrorMessage("Please log in to view our fabulous protected content.")
    }
  }, [])

  // if the user's logged-in status changes, save the token we receive from the server
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.username}`)
      localStorage.setItem("token", response.token) // store the token into localStorage
    } else {
      localStorage.setItem("token", null)
    }
  }, [response])

  // what to do when the user clicks the submit button on the form
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }
      console.log(requestData)
      // send a POST request with the data to the server api to authenticate
      const responsePost = await axios.post(
          `${process.env.REACT_APP_BACKEND}/login`,
          requestData,
      )
      // store the response data into the data state variable
      console.log(`Server response: ${JSON.stringify(responsePost.data, null, 0)}`)
      setResponse(responsePost.data)
    } catch (err) {
      // request failed... user entered invalid credentials
      setErrorMessage(
          "You entered invalid credentials. Try harder! Check out the usernames in the server's user_data.js file.",
      )
    }
  }

  // if the user is not logged in, show the login form
  if (!response.success) {
    return (
      <div className="flex-container flex-center">
        <Form id="form-container" className="col-md-4 m24 p24 bar-lg auth-shadow" onSubmit={ handleSubmit }>
          <h3 className="ta-center mb24">Welcome Back!</h3>
          <Form.Group className="mb-3" controlId="formSignin">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" name="username" placeholder="Email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" name="password" placeholder="Password" />
            </FloatingLabel>
            <a
              className="fs-body1"
              href="/account-recovery"
            >
              Forgot your password?
            </a>
          </Form.Group>
          <Button className="w100" variant="primary" type="submit">
            Sign In
          </Button>
          <a className="fs-body1" href="/signup">Need an account?</a>
        </Form>
      </div>
    )
  } else {
    return <Navigate to="/" />
  }
}
