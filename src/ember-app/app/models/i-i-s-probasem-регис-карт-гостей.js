import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегисКартГостейMixin
} from '../mixins/regenerated/models/i-i-s-probasem-регис-карт-гостей';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегисКартГостейMixin, Validations, {
});

defineProjections(Model);

export default Model;
