import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {Box} from 'react-layout-components';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const CustomText = (field) => (
  <TextField {...field.input} hintText={field.hintText} className={field.className} type={field.type} />
)

class LoginForm extends Component {
  render() {
    const { title, subtitle, handleSubmit } = this.props;
    return (
      <Card>
        <CardTitle title={title} subtitle={subtitle} />
        <CardText>
          <Field hintText="Username" className="login-username" name="username" component={CustomText} />
          <Field hintText="Password" className="login-password" name="password" component={CustomText} type="password" />
        </CardText>
        <CardActions>

          <Box justifyContent="flex-end">
            <RaisedButton onClick={handleSubmit} name="login-button" className="login-button" primary={true} label="Login" />
          </Box>

        </CardActions>
      </Card>

    );
  }
}

const compiledComponent = reduxForm({
  form: 'contact'
})(LoginForm);

export default compiledComponent;
