import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Signup.css"

export default function Signup() {
  return (
    <div className="flex-container flex-center">
      <Form id="form-container" className="col-md-4 m24 p24 bar-lg auth-shadow">
        <h3 className="ta-center mb24">Create an Account</h3>
        <Form.Group className="mb-3" controlId="formSignin">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password"
          >
            <Form.Control type="password" placeholder="Confirm Password" />
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
