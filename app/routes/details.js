import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function(artist) {
    var key = config.myApiKey;

   var url = 'https://api.spotify.com/v1/artists/' + artist.artist_id;
   var url2 = 'https://api.spotify.com/v1/artists/' + artist.artist_id + '/albums';

 return Ember.RSVP.hash({
   artists: Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON;
  }),
  albums: Ember.$.getJSON(url2).then(function(responseJSON) {
    console.log(responseJSON.items);
    return responseJSON.items;
  })
});
}
});
