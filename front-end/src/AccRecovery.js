import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./AccRecovery.css"

export default function Signin() {
  return (
    <div className="flex-container flex-center">
      <Form className="col-md-4 m24 p24 bar-lg auth-shadow">
        <p className="mb24 wmax450 c-white">
          Forgot your account’s password or having trouble logging in?
          Enter your email address and we’ll send you a recovery link.
        </p>
        <Form.Group className="mb-3" controlId="formSignin">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
        </Form.Group>
        <Button className="w100" variant="primary" type="submit">
          Send Recovery Email
        </Button>
      </Form>
    </div>
  )
}
