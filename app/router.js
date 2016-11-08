import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:search'});
  this.route('details', {path: '/details/:artist_id'});
  this.route('about');
  this.route('contact');
});

export default Router;
