let controller = require('./../controllers/controller');

module.exports = app => {
	app.get('/api/events', controller.allEvents);
	
}