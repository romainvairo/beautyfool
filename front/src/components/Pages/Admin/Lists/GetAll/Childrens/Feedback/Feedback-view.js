import moment from 'moment';

import composeChildren from '../_composeChildren';
import translations from './translations';

const FeedbackView = composeChildren(translations, ({ translations, item }) => [
  [translations.sentBy, item.user ? item.user.username : 'utilisateur supprimé'],
  [translations.rate, item.rate],
  [translations.date, moment(item.createdAt).format('D/M/YYYY H:m:s')],
]);

export default FeedbackView;
