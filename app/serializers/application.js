import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	serialize: function(record, options) {
		var json = this._super(record, options);
		return json;
	}
});