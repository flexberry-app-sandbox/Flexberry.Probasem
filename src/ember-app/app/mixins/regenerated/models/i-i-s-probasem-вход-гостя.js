import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  регисКартГостей: DS.belongsTo('i-i-s-probasem-регис-карт-гостей', { inverse: null, async: false }),
  регистрацВход: DS.belongsTo('i-i-s-probasem-регистрац-вход', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  регисКартГостей: {
    descriptionKey: 'models.i-i-s-probasem-вход-гостя.validations.регисКартГостей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВход: {
    descriptionKey: 'models.i-i-s-probasem-вход-гостя.validations.регистрацВход.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-probasem-вход-гостя', {
    
  });
};
