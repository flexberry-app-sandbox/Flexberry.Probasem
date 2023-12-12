import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  регКартСотруд: DS.belongsTo('i-i-s-probasem-рег-карт-сотруд', { inverse: null, async: false }),
  регистрацВход: DS.belongsTo('i-i-s-probasem-регистрац-вход', { inverse: 'входСотрудника', async: false })
});

export let ValidationRules = {
  регКартСотруд: {
    descriptionKey: 'models.i-i-s-probasem-вход-сотрудника.validations.регКартСотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВход: {
    descriptionKey: 'models.i-i-s-probasem-вход-сотрудника.validations.регистрацВход.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходСотрудникаE', 'i-i-s-probasem-вход-сотрудника', {
    
  });
};
