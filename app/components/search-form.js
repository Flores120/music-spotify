import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		songLookUp() {
			var params = {
				search: this.get('search')
			};
			this.sendAction('songLookUp', params);
		}
	}
});
