import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
   var url = 'https://api.spotify.com/v1/search?q=' + params.search + '&type=artist' + '&apikey=03254f9303114dbdbf40366bb98bbaff';
   return Ember.$.getJSON(url).then(function(responseJSON) {
		 console.log(responseJSON.artists.items[0]);
		 return responseJSON.artists.items;
   });
 }
});
