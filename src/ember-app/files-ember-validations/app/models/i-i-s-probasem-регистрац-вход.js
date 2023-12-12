import {
  defineNamespace,
  defineProjections,
  Model as РегистрацВходMixin
} from '../mixins/regenerated/models/i-i-s-probasem-регистрац-вход';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрацВходMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
