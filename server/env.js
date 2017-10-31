var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');
	
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://slugr:dfdfd@ds129462.mlab.com:29462/slugr',
		port: process.env.PORT || 8080
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://slugr:dfd@ds129462.mlab.com:29462/slugr' || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
		port: process.env.PORT || 8080
	}
};