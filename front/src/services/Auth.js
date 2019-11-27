import CryptoJs from 'crypto-js';
import Cookies from 'js-cookie';
import _ from 'lodash';

import { setUser } from '../store/actions/client';
import store from '../store';

// retrieve needed actions
const actions = ((dispatch) => ({
  setUser: value => dispatch(setUser(value))
}))(store.dispatch);

export class Auth {
  // The name of the cookie session to save
  static cookieName = 'cookieSession-beautyfool';
  // The secret key to encrypt/decrypt data
  static secretKey = 'beautyfoolSecretKey';

  /**
   * save the user data into the store and encrypt into a cookie for on day
   * @param {Object} user
   */
  static saveUser = user => {
    user.logged = true;

    actions.setUser(user);
    Auth.setCookieSession(user);
  }

  /**
   * encrypt the user data and set it into a cookie for one day
   * @param {Object} user
   */
  static setCookieSession = (user) => {
    const encryptedData = Auth.encrypt(user);
    Cookies.set(Auth.cookieName, encryptedData, { expires: 1 });
  }

  /**
   * JSdoc
   * encrypts datas
   * @param {Any} data
   * @returns {String}
   */
  static encrypt = data => {
    return CryptoJs.AES.encrypt(JSON.stringify(data), Auth.secretKey);
  }
  
  /**
   * decrypts data
   * @param {Any} data
   * @returns {Any}
   */
  static decrypt = data => {
    if (!data) {
      return;
    }   

    const bytes = CryptoJs.AES.decrypt(data.toString(), Auth.secretKey);
    return JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
  }

  /**
   * save the user data into the store and encrypt into a cookie for one day
   * @param {Object} user
   */
  static login = (user) => {
    if (!user) {
      user = Auth.decrypt(Cookies.get(Auth.cookieName));
    }

    if (user) {
      Auth.saveUser(user); 
    }
  }

  /**
   * save the user data into the store and encrypt into a cookie for one day
   * @param {Object} user
   */
  static signup = (user) => {
    if(_.isObject(user)) {
      Auth.saveUser(user);
    }
  }
  
  /**
   * get user data from this state
   * @returns {Object}
   */
  static getUser = () => store.getState().clientReducer.user;
}