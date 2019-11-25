import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  // load translation using xhr (ajax) -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend

  // use backend middleware on i18next
  .use(Backend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(initReactI18next)

  // initialization of i18next
  .init({
    fallbackLng: {
      'en-US': ['en'],
      'en-GB': ['en'],
      'fr-FR': ['fr'],
      default: ['en']
    },
    ns: ['glossary', 'home'],
    defaultNS: 'home',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      wait: true,
    }
  });

// load the namespace glossary in global
i18n.loadNamespaces('glossary');
