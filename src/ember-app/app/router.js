import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probasem-гость-l');
  this.route('i-i-s-probasem-гость-e',
  { path: 'i-i-s-probasem-гость-e/:id' });
  this.route('i-i-s-probasem-гость-e.new',
  { path: 'i-i-s-probasem-гость-e/new' });
  this.route('i-i-s-probasem-должность-l');
  this.route('i-i-s-probasem-должность-e',
  { path: 'i-i-s-probasem-должность-e/:id' });
  this.route('i-i-s-probasem-должность-e.new',
  { path: 'i-i-s-probasem-должность-e/new' });
  this.route('i-i-s-probasem-карта-l');
  this.route('i-i-s-probasem-карта-e',
  { path: 'i-i-s-probasem-карта-e/:id' });
  this.route('i-i-s-probasem-карта-e.new',
  { path: 'i-i-s-probasem-карта-e/new' });
  this.route('i-i-s-probasem-комната-l');
  this.route('i-i-s-probasem-комната-e',
  { path: 'i-i-s-probasem-комната-e/:id' });
  this.route('i-i-s-probasem-комната-e.new',
  { path: 'i-i-s-probasem-комната-e/new' });
  this.route('i-i-s-probasem-рег-карт-сотруд-l');
  this.route('i-i-s-probasem-рег-карт-сотруд-e',
  { path: 'i-i-s-probasem-рег-карт-сотруд-e/:id' });
  this.route('i-i-s-probasem-рег-карт-сотруд-e.new',
  { path: 'i-i-s-probasem-рег-карт-сотруд-e/new' });
  this.route('i-i-s-probasem-регис-карт-гостей-l');
  this.route('i-i-s-probasem-регис-карт-гостей-e',
  { path: 'i-i-s-probasem-регис-карт-гостей-e/:id' });
  this.route('i-i-s-probasem-регис-карт-гостей-e.new',
  { path: 'i-i-s-probasem-регис-карт-гостей-e/new' });
  this.route('i-i-s-probasem-регистрац-вход-l');
  this.route('i-i-s-probasem-регистрац-вход-e',
  { path: 'i-i-s-probasem-регистрац-вход-e/:id' });
  this.route('i-i-s-probasem-регистрац-вход-e.new',
  { path: 'i-i-s-probasem-регистрац-вход-e/new' });
  this.route('i-i-s-probasem-сотрудник-l');
  this.route('i-i-s-probasem-сотрудник-e',
  { path: 'i-i-s-probasem-сотрудник-e/:id' });
  this.route('i-i-s-probasem-сотрудник-e.new',
  { path: 'i-i-s-probasem-сотрудник-e/new' });
});

export default Router;
