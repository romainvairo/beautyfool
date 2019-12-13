import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class GetSnackbar extends RequestSnackbarBridge {

  /**
   * set the request for the `RequestSnackbar`
   */
  setter = () => {
    const { match } = this.context.props;

    const { id, category } = match.params;

    this
      .setTranslations(translations)
      .setRequest(() => axios.get(`/api/${category}/${id}`))
      .formatAll(category);
  }

  then = ({ data }) => {
    this.context.setState(data.data);
  }

  catch = err => {
    console.error(err);
  }
}
