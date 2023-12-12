import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комната: DS.belongsTo('i-i-s-probasem-комната', { inverse: null, async: false }),
  входСотрудника: DS.hasMany('i-i-s-probasem-вход-сотрудника', { inverse: 'регистрацВход', async: false }),
  входГостя: DS.hasMany('i-i-s-probasem-вход-гостя', { inverse: 'регистрацВход', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probasem-регистрац-вход.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probasem-регистрац-вход.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-probasem-регистрац-вход.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-probasem-регистрац-вход.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрацВходE', 'i-i-s-probasem-регистрац-вход', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probasem-комната', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    входСотрудника: hasMany('i-i-s-probasem-вход-сотрудника', 'Вход сотрудника', {
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
    }),
    входГостя: hasMany('i-i-s-probasem-вход-гостя', 'Вход гостя', {
      регисКартГостей: belongsTo('i-i-s-probasem-регис-карт-гостей', 'Регис карт гостей', {
        дата: attr('Дата', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'дата' })
    })
  });

  modelClass.defineProjection('РегистрацВходL', 'i-i-s-probasem-регистрац-вход', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probasem-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
