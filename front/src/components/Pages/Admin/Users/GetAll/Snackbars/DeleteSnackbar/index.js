import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class DeleteSnackbar extends RequestSnackbarBridge {

  setter = () => {
    this
      .setTranslations(translations)
      .setRequest(user => axios.delete('/api/users/' + user._id + '/delete'));
  }

  then = (_, user) => {
    // @ts-ignore
    this.context.deleteUserById(user._id);
  }

  catch = err => {
    console.error(err);
  }

  caller = user => {
    this.call(user);
  }
}
