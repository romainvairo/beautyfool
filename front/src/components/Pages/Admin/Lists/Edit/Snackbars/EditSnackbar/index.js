import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class EditSnackbar extends RequestSnackbarBridge {

  /**
   * set the request for the `RequestSnackbar`
   */
  setter = () => {
    const { match } = this.context.props;

    const { id, category } = match.params;

    this
      .setTranslations(translations)
      .setRequest(formData => {
        formData.id = id;
        return axios.put(`/api/${category}/${id}/edit`, formData)
      })
      .formatAll(category);
  }

  then = ({ data }) => {
    this.context.setState(data.data);
  }

  catch = err => {
    console.error(err);
  }
}
