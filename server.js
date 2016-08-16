var fs         = require('fs');
    express    = require('express');
    bodyParser = require('body-parser');
    logger     = require('morgan');
    path       = require('path'),
    colors     = require('colors'),
    port       = process.env.PORT || 8080,
// CREATE AN APP OBJECT

    app = express();
console.log(app);


// MIDDLEWARE //

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'));

// ROUTES //

app.get('/', function(req, res){
	res.sendFile('index.html', {
		root : './public/html'
	});
});


app.listen(port, (error)=>{
    if (error) {
        console.error('Oh no, the server could not start!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Sweeney Portfolio is Up and Running!! Hire me:).');
    }
});
