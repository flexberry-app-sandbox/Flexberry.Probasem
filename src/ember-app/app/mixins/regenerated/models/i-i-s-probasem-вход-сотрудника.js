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
    регКартСотруд: belongsTo('i-i-s-probasem-рег-карт-сотруд', 'ФИО', {
      сотрудник: belongsTo('i-i-s-probasem-сотрудник', '', {
        фИО: attr('ФИО', { index: 0 }),
        должность: belongsTo('i-i-s-probasem-должность', '', {
          должность: attr('Должность', { index: 1 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      карта: belongsTo('i-i-s-probasem-карта', '', {
        кодКарты: attr('', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
