import axios from 'axios';
import { browserHistory } from 'react-router';
import { USER_API_URL } from '../config';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,

  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  UNAUTH_USER

} from './types/index';


function config(){
  let conf = {
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    responseType: 'json',
    withCredentials: true
  }
  return conf;
}

export function authError(CONST, error) {
  return {
    type: CONST,
    payload: error,
  };
}

export function registerUser(props) {
  return function (dispatch) {
    axios.post(`${USER_API_URL}/register`, props, config())
      .then((response) => {
        console.log(response);
        dispatch({
            type: SIGNUP_IN_PROGRESS,
            data: {userId: response.data.userId}
        });
        browserHistory.push('/userui/home');
      })
      .catch(error => {
        dispatch(authError(SIGNUP_FAILURE, 'error'))
      });
  }
}

export function signinUser(props) {
  const { email, password } = props;

  return function (dispatch) {
    axios.post(`${USER_API_URL}/login`, {email, password}, config())
      .then(response => {
        console.log(response);
        dispatch({ type: AUTH_USER });



        browserHistory.push('/userui/home');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Login credentials failed!")));
  }
}

export function signoutUser() {
  browserHistory.push('/ui/login');
  return {
    type: UNAUTH_USER,
  }
}
