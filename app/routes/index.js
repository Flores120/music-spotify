import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
	 songLookUp(params) {
		 this.transitionTo('results', params.search);
	 }
 }
});
