import axios from 'axios';

export default axios.create({
  baseURL: 'https://beautyfool.herokuapp.com/',
  /* baseURL: 'http://localhost:8000/', */
});
