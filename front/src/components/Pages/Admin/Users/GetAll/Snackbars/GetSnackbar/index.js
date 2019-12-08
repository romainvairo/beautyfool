import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class GetSnackbar extends RequestSnackbarBridge {

  /**
   * set the request for the `RequestSnackbar`
   */
  setter = () => {
    this
      .setTranslations(translations)
      .setRequest(page => axios.get('/api/users/page/' + page));
  }

  then = ({ data }, page, type) => {
    this.context.setState(state => ({
      users: type === 'bottom'
        ? state.users.concat(data.data) // if `type` is equal to 'bottom' we concat `data.data` (new users) with the current users
        : Array.isArray(data.data)
          ? data.data.concat(state.users) // otherwise if `data.data` (new users) is an array we concat the current users with `data.data` (new users)
          : state.users // otherwise we just keep the current users as it is
    }));
  }

  catch = err => {
    console.error(err);
  }

  finally = () => {
    // @ts-ignore
    this.context.getting = false;
  }

  caller = (page, type) => {
    // @ts-ignore
    this.context.getting = true;
    this.call(page, type);
  }
}
