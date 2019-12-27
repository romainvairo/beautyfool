import translations from './translations';
import { RequestSnackbarBridge } from '../../../../../../../services';
import axios from '../../../../../../../axios';

export class GetSnackbar extends RequestSnackbarBridge {

  /**
   * set the request for the `RequestSnackbar`
   */
  setter = () => {
    const { match } = this.context.props;

    const category = match.params.category;

    this
      .setTranslations(translations)
      .setRequest(page => axios.get(`/api/${category}/page/${page}`))
      .formatAll(category);
  }

  then = ({ data }, page, type) => {
    this.context.setState(state => ({
      list: type === 'bottom'
        ? state.list.concat(data.data) // if `type` is equal to 'bottom' we concat `data.data` (new users) with the current list
        : Array.isArray(data.data)
          ? data.data.concat(state.list) // otherwise if `data.data` (new users) is an array we concat the current list with `data.data` (new users)
          : state.list // otherwise we just keep the current list as it is
    }));
  }

  catch = err => {
    this.formatError()
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
