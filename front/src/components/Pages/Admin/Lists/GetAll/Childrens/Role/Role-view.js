import composeChildren from '../_composeChildren';
import translations from './translations';

const RoleView = composeChildren(translations, ({ translations, item }) => [
  [translations.name, item.name],
]);

export default RoleView;
