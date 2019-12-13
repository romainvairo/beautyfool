import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class AddSnackbar extends RequestSnackbarBridge {

  /**
   * set the request for the `RequestSnackbar`
   */
  setter = () => {
    const { match } = this.context.props;

    const { category } = match.params;

    this
      .setTranslations(translations)
      .setRequest(() => axios.post(`/api/${category}/add`))
      .formatAll(category);
  }

  then = ({ data }) => {
    this.context.setState(data.data);
  }

  catch = err => {
    console.error(err);
  }
}
