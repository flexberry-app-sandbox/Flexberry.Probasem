import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегКартСотрудMixin
} from '../mixins/regenerated/models/i-i-s-probasem-рег-карт-сотруд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегКартСотрудMixin, Validations, {
});

defineProjections(Model);

export default Model;
