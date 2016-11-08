import Ember from 'ember';

export function artistPopularity(params/*, hash*/) {
  var artist = parseInt(params);
  console.log(artist);
  if (artist >= 70 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(artistPopularity);
