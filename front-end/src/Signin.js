import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signin.css"

export default function Signin() {
  return (
    <div class="flex-container flex-center">
      <Form className="p24 wmin450 bar-lg auth-shadow">
        <h3 class="ta-center mb24">Welcome Back!</h3>
        <Form.Group className="mb-3" controlId="formSignin">
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <a class="fs-body1" href="/tbd">Forgot your password?</a>
        </Form.Group>
        <Button className="w100" variant="primary" type="submit">
          Sign In
        </Button>
        <a class="fs-body1" href="/signup">Need an account?</a>
      </Form>
    </div>
  )
}
