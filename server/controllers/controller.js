let mongoose = require('mongoose');

let Event = mongoose.model('Event');


module.exports = {

	allEvents: (req, res) => {
		Event.find({}).exec((err, events)=>{
			if(err){
				console.log(err)
			} else {
				return res.json(events)
			}
		})
	}
}