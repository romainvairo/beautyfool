import translations from './translations';
import composeChildren from '../_composeChildren';

const ServiceView = composeChildren(translations, ({ translations, item }) => [
  [translations.name, item.name],
  [translations.category, item.category.name]
]);

export default ServiceView;
