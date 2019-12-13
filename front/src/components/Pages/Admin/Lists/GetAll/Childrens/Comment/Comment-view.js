import moment from 'moment';

import composeChildren from '../_composeChildren';
import translations from './translations';

const CommentView = composeChildren(translations, ({ translations, item }) => [
  [translations.sentBy, item.user.username],
  [translations.date, moment(item.createdAt).format('D/M/YYYY H:m:s')],
]);

export default CommentView;
