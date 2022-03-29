import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Login.css"

export default function Login() {
  return (
    <div className="flex-container flex-center">
      <Form className="col-md-4 m24 p24 bar-lg auth-shadow">
        <h3 className="ta-center mb24 c-white">Welcome Back!</h3>
        <Form.Group className="mb-3" controlId="formSignin">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
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
}
