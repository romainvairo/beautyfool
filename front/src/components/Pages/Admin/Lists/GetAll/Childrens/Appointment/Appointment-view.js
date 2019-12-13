import composeChildren from '../_composeChildren';
import translations from './translations';

const CategoryView = composeChildren(translations, ({ translations, item }) => [
  [translations.name, item.name],
]);

export default CategoryView;
