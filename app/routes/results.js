import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var key = config.myApiKey;
   	var url = 'https://api.spotify.com/v1/search?q=' + params.search + '&type=artist' + '&apikey=' +key;
   		return Ember.$.getJSON(url).then(function(responseJSON) {
		 		console.log(responseJSON.artists.items[0]);
			return responseJSON.artists.items;
   });
 },
 actions: {
	songLookUp(params) {
		this.transitionTo('results', params.search);
	}
}
});
