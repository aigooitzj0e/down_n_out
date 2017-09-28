let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');



app.use(bodyParser.json({extended:true}));
app.use(express.static(path.join(__dirname, 'public', 'dist')));


let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, ()=>{
	console.log("listening on port 8000");
})
