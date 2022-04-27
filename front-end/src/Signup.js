import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Signup.css"

export default function Signup() {
  const jwtToken = localStorage.getItem("token")

  const [response, setResponse] = useState({
    success: jwtToken !== "null" && jwtToken !== null,
  })
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const requestData = {
        email: e.target.email.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
      }
      console.log(requestData)
      const responsePost = await axios.post(
          `${process.env.REACT_APP_BACKEND}/signup`,
          requestData,
      )
      console.log(`Server response: ${JSON.stringify(responsePost.data, null, 0)}`)
      setResponse(responsePost.data)
    } catch (err) {
      // console.log('error occured')
      setErrorMessage("Authentication failed!")
    }
  }

  if (!response.success) {
    return (
      <div className="flex-container flex-center">
        <Form id="form-container" className="col-md-4 m24 p24 bar-lg auth-shadow" onSubmit={ handleSubmit }>
          <h3 className="ta-center mb24">Create an Account</h3>
          <Form.Group className="mb-3" controlId="formSignin">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="Email" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" name="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingConfirmPassword"
              label="Confirm Password"
            >
              <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
            </FloatingLabel>
          </Form.Group>
          <Button className="w100" variant="primary" type="submit">
            Sign Up
          </Button>
          <a className="fs-body1" href="/login">Already have an account?</a>
        </Form>
      </div>
    )
  }
  return <Navigate to="/login" replace={true} state={{ isLoggedIn: false }} />
}
