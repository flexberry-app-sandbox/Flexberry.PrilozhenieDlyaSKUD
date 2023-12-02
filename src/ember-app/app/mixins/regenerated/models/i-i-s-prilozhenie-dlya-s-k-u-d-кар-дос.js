import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('number'),
  админ: DS.belongsTo('i-i-s-prilozhenie-dlya-s-k-u-d-админ', { inverse: null, async: false })
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КарДосE', 'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос', {
    номерКарты: attr('Номер карты', { index: 0 }),
    админ: belongsTo('i-i-s-prilozhenie-dlya-s-k-u-d-админ', 'Админ', {

    }, { index: 1 })
  });

  modelClass.defineProjection('КарДосL', 'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос', {
    номерКарты: attr('Номер карты', { index: 0 })
  });
};
