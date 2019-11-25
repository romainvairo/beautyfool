import React from 'react';
import { camelCase, upperFirst } from 'lodash';

import { getComponentsInContainer, getFieldProps, getClasses, getValidations } from './actions';
import FieldView from './Field-view';

class FieldContainer extends React.PureComponent {

  state = {
    show: {},
    disabled: {},
    className: {},
  };

  getRightComponent = () => {
    let { type, InputComponent, LocalComponent } = this.props;
    type = upperFirst(camelCase(type));

    const componentsContainer = getComponentsInContainer(this.props, 'Component');

    return LocalComponent || componentsContainer[type] || InputComponent;
  }

  render() {
    const field = this.getRightComponent();

    //getValidations(this.props);

    const Element = (
      <FieldView
        {...this.props}
        Field={field}
        getFieldProps={getFieldProps}
        getClasses={getClasses}
      />
    );

    return Element;
  }
}

export default FieldContainer;
