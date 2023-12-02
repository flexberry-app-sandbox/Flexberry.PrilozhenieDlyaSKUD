import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.title'),
          children: [{
            link: 'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-dlya-s-k-u-d-админ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-админ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-админ-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-dlya-s-k-u-d.i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})