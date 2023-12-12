import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  карта: DS.belongsTo('i-i-s-probasem-карта', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-probasem-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probasem-рег-карт-сотруд.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probasem-рег-карт-сотруд.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probasem-рег-карт-сотруд.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегКартСотрудE', 'i-i-s-probasem-рег-карт-сотруд', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-probasem-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    карта: belongsTo('i-i-s-probasem-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('РегКартСотрудL', 'i-i-s-probasem-рег-карт-сотруд', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-probasem-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    карта: belongsTo('i-i-s-probasem-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
