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
   * get the user from the store
   * @returns {Object}
   */
  static getUser = () => store.getState().clientReducer.user || {};

  /**
   * get whether the user is logged
   * @returns {Boolean}
   */
  static isLogged = () => Auth.getUser().logged;

  /**
   * get the roles from the user
   * @param {Object} user
   * @param {Object[]} user.roles
   * @param {String} user.roles[].name
   * @returns {String[]}
   */
  static getUserRoles = user => {
    user.roles = user.roles || [];
    return user.roles.map(role => role.name);
  }

  /**
   * get whether the user has the given `role`
   * @param {String} role
   * @returns {Boolean}
   */
  static hasRole = role => {
    if (!Auth.isLogged()) {
      return;
    }

    const roles = Auth.getUser().roles || [];

    return roles.map(r => r.name).includes(role);
  }

  /**
   * get if the user is a user
   * @returns {Boolean}
   */
  static isUser = () => Auth.hasRole('user');

  /**
   * get if the user is an admin
   * @returns {Boolean}
   */
  static isAdmin = () => Auth.hasRole('admin');

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
   * @param {*} data
   * @returns {String}
   */
  static encrypt = data => {
    return CryptoJs.AES.encrypt(JSON.stringify(data), Auth.secretKey);
  }

  /**
   * decrypts data
   * @param {*} data
   * @returns {*}
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
   * logout the user and remove its cookie session
   */
  static logout = () => {
    Cookies.remove(Auth.cookieName);
    actions.setUser({});
  }

  /**
   * get user data from this state
   * @returns {Object}
   */
  static getUser = () => store.getState().clientReducer.user;
}
