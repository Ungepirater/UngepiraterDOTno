import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: '//api.ungepirater.no:3000',
	namespace: 'api/v1'
});
