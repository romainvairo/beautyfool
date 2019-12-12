import translations from './translations';
import composeChildren from '../_composeChildren';

const ServiceView = composeChildren(translations, ({ translations, item }) => [
  [translations.name, item.name],
  [translations.description, item.description]
]);

export default ServiceView;
