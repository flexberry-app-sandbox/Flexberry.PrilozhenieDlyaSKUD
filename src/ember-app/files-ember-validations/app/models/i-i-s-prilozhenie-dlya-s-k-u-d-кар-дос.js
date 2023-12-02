import {
  defineNamespace,
  defineProjections,
  Model as КарДосMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КарДосMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
