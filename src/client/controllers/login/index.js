import React from 'react';
const LoginController = (Login, authService) => {
  return class LoginController extends React.Component {
    onLogin = ({username, password}) => {
      authService.login(username, password)
        .then(() => this.props.router.push('/'))
        .catch((err) => console.log(err))
    }
    render() {
      return <Login {...this.props} onLogin={this.onLogin} />;
    }
  }
}
LoginController.deps = ['Login', 'authService'];
export default LoginController;
