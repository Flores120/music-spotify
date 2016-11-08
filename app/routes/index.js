import Ember from 'ember';

var client_id = '520f15b7dbbc40f6bad92ba2fe0ecc2f'; // Your client id
var client_secret = '03254f9303114dbdbf40366bb98bbaff'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

export default Ember.Route.extend({
	actions: {
	 songLookUp(params) {
		 this.transitionTo('results', params.search);
	 }
 }
});
