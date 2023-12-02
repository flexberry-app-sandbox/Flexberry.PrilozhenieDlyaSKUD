import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-админ-l');
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-админ-e',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-админ-e/:id' });
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-админ-e.new',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-админ-e/new' });
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-l');
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e/:id' });
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e.new',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос-e/new' });
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-l');
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e/:id' });
  this.route('i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e.new',
  { path: 'i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр-e/new' });
});

export default Router;
