import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services/RequestSnackbarBridge';
import axios from '../../../../../../../axios';
import { singularify } from '../../../../../../../utils';

export class DeleteSnackbar extends RequestSnackbarBridge {

  setter = () => {
    const { match } = this.context.props;

    const { category } = match.params;

    this
      .setTranslations(translations)
      .setRequest(item => axios.delete(`/api/${category}/${item._id}/delete`))
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
