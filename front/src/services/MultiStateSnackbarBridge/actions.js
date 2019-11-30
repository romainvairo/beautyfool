import { MultiStateSnackbarBridge } from '.';

/**
 * @typedef {import('.').MultiStateSnackbarBridge} MultiStateSnackbarBridge
 * @typedef {(message: String, loader?: Boolean | JSX.Element) => MultiStateSnackbarBridge} SnackbarSetter
 * @typedef {(status: String) => MultiStateSnackbarBridge} SetStatus
 */

// default `snackbar`'s state
export const defaultSnackbar = {
  status: 'ongoing',
  data: {},
  open: false,
};

// all the status of the snackbar
const snackbarProperties = ['success', 'warning', 'error', 'info'];

/**
 * close the snackbar
 * @param {MultiStateSnackbarBridge} thisArg
 * @returns {() => MultiStateSnackbarBridge}
 */
export const close = thisArg => () => {
  thisArg.setSnackbar({ ...defaultSnackbar });
  console.log("bridge's close")
  return thisArg;
}

/**
 * open the snackbar
 * @param {MultiStateSnackbarBridge} thisArg
 * @returns {() => MultiStateSnackbarBridge}
 */
export const open = thisArg => () => {
  thisArg.setSnackbar({ open: true });
  return thisArg;
}

/**
 * @param {Object} thisArg caller's context
 * @param {Object} data
 */
const setSnackbar = (thisArg, data) => {
  thisArg.snackbarState = {
    ...thisArg.snackbarState,
    ...data,
  };
}

/**
 * create a function to set a success callback on the snackbar
 * @param {MultiStateSnackbarBridge} thisArg
 * @returns {(callback: Function) => MultiStateSnackbarBridge}
 */
export const createSetSuccessCallback = thisArg => callback => {
  thisArg.setSnackbar({ successCallback: callback });
  return thisArg;
}

/**
 * create a function to change the snackbar's data in the context of `thisArg`
 * @param {MultiStateSnackbarBridge} thisArg
 * @returns {(type: String) => SnackbarSetter}
 */
const createSnackbarDataChanger = thisArg => type => {
  const newData = { ...thisArg.snackbarState };
  let data = newData.data;

  const notStart = type !== 'start';

  if (notStart) {
    data = data[type];
  } else {
    data.variant = 'info';
  }

  return (message, loader) => {
    if (notStart) {
      newData.data[type] = {};
      newData.data[type].message = message;
      newData.data[type].Loader = loader;
    } else {
      newData.data.variant = 'info';
      newData.data.message = message;
      newData.data.Loader = loader;
    }

    setSnackbar(thisArg, newData);
    return thisArg;
  }
}

/**
 *
 * @param {MultiStateSnackbarBridge} thisArg
 * @returns {SetStatus}
 */
export const createSetStatus = thisArg => status => {
  thisArg.setSnackbar({ status });
  return thisArg;
}

/**
 *
 * @param {MultiStateSnackbarBridge} thisArg
 */
export const initSetSnackbar = thisArg => {
  const snackbarChanger = createSnackbarDataChanger(thisArg);

  thisArg.success = snackbarChanger('success');
  thisArg.warning = snackbarChanger('warning');
  thisArg.info = snackbarChanger('info');
  thisArg.error = snackbarChanger('error');
  thisArg.start = snackbarChanger('start');
}

/**
 * snackbar setter used to change the `snackbar`'s state which must update the component to re-render the `Snackbar` component
 * @param {Object} thisArg caller's context
 * @param {Object} componentContext context of the component
 * @returns {(data: Object) => void}
 */
export const createSetSnackbar = (thisArg, componentContext) => data => {
  setSnackbar(thisArg, data);

  componentContext.forceUpdate();
}
