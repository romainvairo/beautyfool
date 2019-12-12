import moment from 'moment';

import composeChildren from '../_composeChildren';
import translations from './translations';

const ActualityView = composeChildren(translations, ({ translations, item }) => [
  [translations.actualityTitle, item.title],
  [translations.date, moment(item.createdAt).format('D/M/YYYY H:m:s')]
]);

export default ActualityView;
