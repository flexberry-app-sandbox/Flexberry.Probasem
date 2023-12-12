import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрацВходMixin
} from '../mixins/regenerated/models/i-i-s-probasem-регистрац-вход';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрацВходMixin, Validations, {
});

defineProjections(Model);

export default Model;
