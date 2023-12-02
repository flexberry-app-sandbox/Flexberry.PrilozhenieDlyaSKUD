import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  спрСотр: DS.belongsTo('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  спрСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-dlya-s-k-u-d-админ.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдминE', 'i-i-s-prilozhenie-dlya-s-k-u-d-админ', {
    спрСотр: belongsTo('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр', 'Спр сотр', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('АдминL', 'i-i-s-prilozhenie-dlya-s-k-u-d-админ', {
    спрСотр: belongsTo('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
