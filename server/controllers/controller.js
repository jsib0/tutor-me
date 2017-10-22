let mongoose = require('mongoose');

let Event = mongoose.model('Event');


module.exports = {

	createEvent: (req, res) => {
		console.log(req.body);
		let event = new Event(req.body);
		event.save((err, event) => {
			if(err){
				console.log(err);
				return res.status(500).send("Error saving friend");
			} else {
				console.log(event);
				res.json(event);
			}
		})
	}

	



}