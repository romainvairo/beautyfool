import React from 'react';

import { InfoSection, InfoPart } from '../../Info';
import withTranslations from '../../../../../../../HOCs';

const composeChildren = (translations, items) => {
  const ChildrenWrapper = ({ translations, item }) => (
    <InfoSection>
      {items({ translations, item }).map(item => (
        <InfoPart key={item[0]}>{item[0]}: {item[1]}</InfoPart>
      ))}
    </InfoSection>
  );

  return withTranslations(translations)(ChildrenWrapper);
}

export default composeChildren;
