import React from 'react';
import classNames from 'classnames';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/**
 * @param {Object} param0
 * @param {*} [param0.value]
 * @param {String} param0.label
 * @param {Boolean} param0.checked
 * @param {String} param0.name
 * @param {Function} param0.onChange
 * @param {String} [param0.className]
 * @param {Object} [param0.classes]
 */
const Checkbox = ({ value, label, checked, name, onChange, className, classes }) => (
  <FormControlLabel
    className={classNames(className, classes.control)}
    value={value}
    label={label}
    control={
      <MuiCheckbox
        // @ts-ignore
        onChange={onChange}
        checked={checked}
        name={name}
        id={name}
        className={classes.checkbox}
      />
    }
  />
);

Checkbox.defaultProps = {
  classes: {},
  value: '',
};

export default Checkbox;
