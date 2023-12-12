import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  датаРождения: DS.attr('date'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-probasem-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-probasem-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: belongsTo('i-i-s-probasem-должность', 'Должность', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'должность' }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    данныеПаспорта: attr('Данные паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-probasem-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: belongsTo('i-i-s-probasem-должность', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    данныеПаспорта: attr('Данные паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
