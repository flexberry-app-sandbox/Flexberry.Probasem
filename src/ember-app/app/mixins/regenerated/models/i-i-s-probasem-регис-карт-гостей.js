import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  гость: DS.belongsTo('i-i-s-probasem-гость', { inverse: null, async: false }),
  карта: DS.belongsTo('i-i-s-probasem-карта', { inverse: null, async: false }),
  комната: DS.belongsTo('i-i-s-probasem-комната', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probasem-регис-карт-гостей.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-probasem-регис-карт-гостей.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probasem-регис-карт-гостей.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probasem-регис-карт-гостей.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегисКартГостейE', 'i-i-s-probasem-регис-карт-гостей', {
    дата: attr('Дата', { index: 0 }),
    гость: belongsTo('i-i-s-probasem-гость', 'Гость', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    комната: belongsTo('i-i-s-probasem-комната', 'Комната', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    карта: belongsTo('i-i-s-probasem-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('РегисКартГостейL', 'i-i-s-probasem-регис-карт-гостей', {
    дата: attr('Дата', { index: 0 }),
    гость: belongsTo('i-i-s-probasem-гость', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    комната: belongsTo('i-i-s-probasem-комната', 'Номер', {
      номер: attr('Номер', { index: 2 })
    }, { index: -1, hidden: true }),
    карта: belongsTo('i-i-s-probasem-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
