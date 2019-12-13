import composeChildren from '../_composeChildren';
import translations from './translations';

const QuestionView = composeChildren(translations, ({ translations, item }) => [
  [translations.question, item.question],
]);

export default QuestionView;
