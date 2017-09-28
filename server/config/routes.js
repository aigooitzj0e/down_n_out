let gMaps = require('./../controllers/gMaps');
let path = require('path');

module.exports = (app)=>{
  app.post('/api/search', gMaps.search)


	app.all('*', (req, res) => {
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}
