import axios from 'axios';
import { browserHistory } from 'react-router';
import { USER_API_URL } from '../config';
import {
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
} from './types/index';


function config(){
  let conf = {
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    responseType: 'json',
    withCredentials: true
  }
  return conf;
}
