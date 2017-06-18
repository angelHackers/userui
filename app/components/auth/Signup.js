import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions/auth';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const renderField = ({input, type, placeholder, meta: {touched, error}}) => (
  <div>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div>{error}</div> }
  </div>
);

class Signup extends Component {
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
      <div>
        <h3>User Signup</h3>
        <form role="form" onSubmit={handleSubmit(this.handleFormSubmit)}>

          <div>
            <Field name="name" component={renderField} type="text" placeholder="Name"/>
          </div>

          <div>
            <Field name="email" component={renderField} type="email" placeholder="Email"/>
          </div>

          <div>
            <Field name="password" component={renderField} type="password" placeholder="Password"/>
          </div>

          <div>
            <Field name="description" component={renderField} type="text" placeholder="Interests"/>
          </div>

          <div>
            { this.props.errorMessage && this.props.errorMessage.signup &&
            <div>{ this.props.errorMessage.signup }</div> }
          </div>

          <button type="submit">Sign Up</button>

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

Signup = reduxForm({form: 'signup', validate})(Signup);

export default connect(mapStateToProps, actions)(Signup);
