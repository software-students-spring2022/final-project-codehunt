import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import './Settings.css';

export default function Settings() {
  return (
    <div className='settings'>
      <h1 className ="setting">User Settings</h1>
      <Form className="info">
        <Form.Group controlId='name-info' size='lg'>
          <Form.Label className="name">Name</Form.Label>
          <br></br>
          <Form.Control type='name-change' placeholder="Enter name"/>
          <a href="/">Edit</a>
        </Form.Group>
        <Form.Group controlId='email' size='lg'>
          <Form.Label>Email Address</Form.Label>
          <br></br>
          <Form.Control type="email" placeholder="Enter email"/>
          <a href="/">Edit</a>
        </Form.Group>
        <Form.Group controlId='password' size='lg'>
          <Form.Label>Password</Form.Label>
          <br></br>
          <Form.Control type="password" placeholder="Enter password"/>
          <a href="/">Reset</a>
        </Form.Group>
      </Form>
      <Form>
        <section className="container">
          <h2 className="subs">Subscriptions</h2>
          <a href="/">Manage</a>
        </section>

        {['radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`LeetCode`}
            />

            <Form.Check
              disabled
              type={type}
              label={`HackerRank`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
      </Form>
      <h3 className="notifs">Email Notifications</h3>
      <div className="bootbutton">
        <BootstrapSwitchButton checked={true} size="sm"/>
      </div>
      <div className="sign-out"><a href="/">Sign Out</a></div>
    </div>
  );
}
