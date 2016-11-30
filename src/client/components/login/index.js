import React from 'react';
import {Box} from 'react-layout-components';
import LoginForm from './login-form';

const Login = () => {
  const LoginBox = ({title, subtitle, onLogin}) => (
    <Box width={300} height={300}>
      <LoginForm onSubmit={onLogin} title={title} subtitle={subtitle} />
    </Box>
  );
  return LoginBox;
}

export default Login;
