import React, {useState, useEffect} from "react"
import {Navigate, useSearchParams} from "react-router-dom"
import axios from "axios"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "../stylesheets/Login.css"

export default function Login() {
  const [urlSearchParams] = useSearchParams() // get access to the URL query string parameters

  const [response, setResponse] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const qsError = urlSearchParams.get("error")
    if (qsError === "protected") {
      setErrorMessage("Please log in to view user content.")
    }
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token !== "null" && token !== null) {
      setResponse({ success: true, token: token })
    } else if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.username}`)
      localStorage.setItem("token", response.token)
    } else {
      localStorage.setItem("token", null)
    }
  }, [response])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const requestData = {
        username: e.target.username.value,
        password: e.target.password.value,
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
    return <Navigate to="/" replace={true} />
  }
}
