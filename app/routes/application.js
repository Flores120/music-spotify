import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  toggleSidebar() {
    $('.ui.sidebar').sidebar('toggle');
  }
}
});
