import composeChildren from '../_composeChildren';
import translations from './translations';

const BeautyTipView = composeChildren(translations, ({ translations, item }) => [
  [translations.title, item.title],
]);

export default BeautyTipView;
