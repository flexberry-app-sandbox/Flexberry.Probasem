import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  кодДолжности: DS.attr('number')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-probasem-должность.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДолжности: {
    descriptionKey: 'models.i-i-s-probasem-должность.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-probasem-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-probasem-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
