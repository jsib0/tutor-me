let mongoose = require('mongoose');
let path = require('path');
let fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tutor-me', { useMongoClient: true });

let models_path = path.join(__dirname, '../models/');

fs.readdirSync(models_path).forEach((file) => {
	if (file.indexOf(".js") >= 0){
		require(path.join(models_path, file));
	}
})
