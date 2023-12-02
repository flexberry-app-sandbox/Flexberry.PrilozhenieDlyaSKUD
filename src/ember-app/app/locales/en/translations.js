import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_dlya_SKUDАдминLForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-админ-l';
import IISPrilozhenie_dlya_SKUDКарДосLForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l';
import IISPrilozhenie_dlya_SKUDСпрСотрLForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l';
import IISPrilozhenie_dlya_SKUDАдминEForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-админ-e';
import IISPrilozhenie_dlya_SKUDКарДосEForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e';
import IISPrilozhenie_dlya_SKUDСпрСотрEForm from './forms/i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e';
import IISPrilozhenie_dlya_SKUDАдминModel from './models/i-i-s-prilozhenie-dlya-s-k-u-d-админ';
import IISPrilozhenie_dlya_SKUDКарДосModel from './models/i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос';
import IISPrilozhenie_dlya_SKUDСпрСотрModel from './models/i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-dlya-s-k-u-d-админ': IISPrilozhenie_dlya_SKUDАдминModel,
    'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос': IISPrilozhenie_dlya_SKUDКарДосModel,
    'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр': IISPrilozhenie_dlya_SKUDСпрСотрModel
  },

  'application-name': 'Prilozhenie_dlya_ SKUD',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_dlya_ SKUD',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_dlya_ SKUD',
          title: 'Prilozhenie_dlya_ SKUD'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'prilozhenie-dlya-s-k-u-d': {
          caption: 'Prilozhenie_dlya_SKUD',
          title: 'Prilozhenie_dlya_SKUD',
          'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l': {
            caption: 'Кар дос',
            title: ''
          },
          'i-i-s-prilozhenie-dlya-s-k-u-d-админ-l': {
            caption: 'Админ',
            title: ''
          },
          'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l': {
            caption: 'Спр сотр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-dlya-s-k-u-d-админ-l': IISPrilozhenie_dlya_SKUDАдминLForm,
    'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l': IISPrilozhenie_dlya_SKUDКарДосLForm,
    'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l': IISPrilozhenie_dlya_SKUDСпрСотрLForm,
    'i-i-s-prilozhenie-dlya-s-k-u-d-админ-e': IISPrilozhenie_dlya_SKUDАдминEForm,
    'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e': IISPrilozhenie_dlya_SKUDКарДосEForm,
    'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e': IISPrilozhenie_dlya_SKUDСпрСотрEForm
  },

});

export default translations;
