import {
  defineNamespace,
  defineProjections,
  Model as АдминMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-dlya-s-k-u-d-админ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АдминMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
