import {
  defineNamespace,
  defineProjections,
  Model as РегКартСотрудMixin
} from '../mixins/regenerated/models/i-i-s-probasem-рег-карт-сотруд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегКартСотрудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
