import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АдминMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-dlya-s-k-u-d-админ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АдминMixin, Validations, {
});

defineProjections(Model);

export default Model;
