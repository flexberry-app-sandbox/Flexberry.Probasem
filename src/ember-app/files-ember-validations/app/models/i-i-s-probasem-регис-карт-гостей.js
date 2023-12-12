import {
  defineNamespace,
  defineProjections,
  Model as РегисКартГостейMixin
} from '../mixins/regenerated/models/i-i-s-probasem-регис-карт-гостей';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегисКартГостейMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
