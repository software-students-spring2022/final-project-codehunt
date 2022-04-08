import React from "react"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"

export default function Error() {
  return(
    <div className="flex-container flex-center">
      <Form id="form-container" className="col-md-4 m24 p24 bar-lg auth-shadow">
        <h1 className="ta-center mb24">Invalid Access</h1>
        <p>You must be logged in to access this page. Click the button below to return to the login page.</p>
        <div className="back">
          <Link to="../Login" className="btn btn-primary">Return to Login</Link>
        </div>
      </Form>
    </div>
  )
}