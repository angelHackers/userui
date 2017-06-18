import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions/auth';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const renderField = ({input, type, id, placeholder, meta: {touched, error}}) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input id={id} className="mdl-textfield__input" type={type} placeholder={placeholder} {...input} />
    { touched && error && <div>{error}</div> }
  </div>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    this.props.registerUser(props);
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="login">
        <form role="form" onSubmit={handleSubmit(this.handleFormSubmit)}>

          <Field name="email" component={renderField} type="text" placeholder="Email"/>

          <Field name="password" component={renderField} type="password" placeholder="Password"/>

          <div>
            { this.props.errorMessage && this.props.errorMessage.login &&
            <div>{ this.props.errorMessage.login }</div> }
          </div>

          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Sign in
          </button>

        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Email is required'
  }

  if (!formProps.password) {
    errors.password = 'Password is required'
  }

  return errors;
}

function mapStateToProps(state) {
  return {}
}

Login = reduxForm({form: 'login', validate})(Login);

export default connect(mapStateToProps, actions)(Login);
