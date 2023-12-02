import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_dlya_ SKUD',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_dlya_ SKUD',
          title: 'Prilozhenie_dlya_ SKUD'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
