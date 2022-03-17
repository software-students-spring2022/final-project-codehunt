import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function Signup() {
  return (
    <div className='Settings'>
      <h1>User Settings</h1>
      <Form>
        <Form.Group controlId='name' size='lg'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='name' placeholder="Enter name"/>
          <a href="/">Edit</a>
        </Form.Group>
        <Form.Group controlId='email' size='lg'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
          <a href="/">Edit</a>
        </Form.Group>
        <Form.Group controlId='password' size='lg'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password"/>
          <a href="/">Reset</a>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Form>
        <h2>Subscriptions</h2>
        <a href="/">Manage</a>
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
      <h3>Email Notifications</h3>
      <BootstrapSwitchButton checked={true} size="sm"/>
      <a href="/">Sign Out</a>
    </div>

    
   
  );
}