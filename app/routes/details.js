import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function(artist) {
    var key = config.myApiKey;
   var url = 'https://api.spotify.com/v1/artists/' + artist.artist_id;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON;
   });
  }
});
