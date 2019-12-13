import composeChildren from '../_composeChildren';
import translations from './translations';

const ImageView = composeChildren(translations, ({ translations, item }) => [
  [translations.title, item.title],
]);

export default ImageView;
