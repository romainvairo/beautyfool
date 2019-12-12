import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';
import { singularify } from '../../../../../../../utils';

export class DeleteSnackbar extends RequestSnackbarBridge {

  setter = () => {
    const { match } = this.context.props;

    const category = singularify(match.params.category);

    this
      .setTranslations(translations)
      .setRequest(user => axios.delete('/api/users/' + user._id + '/delete'))
      .formatAll(category);
  }

  then = (_, user) => {
    // @ts-ignore
    this.context.deleteItemById(user._id);
  }

  catch = err => {
    console.error(err);
  }

  caller = user => {
    this.call(user);
  }
}
