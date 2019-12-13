import composeChildren from '../_composeChildren';
import translations from './translations';

const AppointmentView = composeChildren(translations, ({ translations, item }) => [
  [translations.customer, item.customer],
  [translations.date, item.date],
]);

export default AppointmentView;
