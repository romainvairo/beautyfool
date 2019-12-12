import translations from './translations';
import composeChildren from '../_composeChildren';

const ServiceView = composeChildren(translations, ({ translations, item }) => [
  [translations.username, item.username],
  [translations.email, item.email]
]);

export default ServiceView;
