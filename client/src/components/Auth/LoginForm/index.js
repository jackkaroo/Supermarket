import React, { useState } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export default function LoginForm({login: signIn}) {
  let history = useHistory();

  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailChanged = data => {
    setEamil(data);
  };

  const passwordChanged = data => {
    setPassword(data);
  };

  const handleLoginClick = async () => {
    setIsLoading(true);
    try {
      const data = await signIn({ email, password });
      const token = data.data.data;
      console.log(token)
      const tokenData = jwt_decode(token);
      localStorage.setItem('token', token);
      localStorage.setItem('id', tokenData.id);
      localStorage.setItem('role', tokenData.role);
      history.push('/home');
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <Form name="loginForm" size="large" onSubmit={handleLoginClick}>
      <Segment>
        <Form.Input
          fluid
          icon="at"
          iconPosition="left"
          placeholder="login"
          onChange={ev => emailChanged(ev.target.value)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          onChange={ev => passwordChanged(ev.target.value)}
        />
        <Button type="submit" color="teal" fluid size="large" loading={isLoading} primary>
          Login
        </Button>
      </Segment>
    </Form>
  );
}
