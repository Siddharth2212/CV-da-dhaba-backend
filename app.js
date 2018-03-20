var express = require('express'); //1 akshay
var app = express(); //shivam 1
var dishRouter = require('./status');

app.use('/dishes', dishRouter);

app.listen(8080, function () {
    console.log('Server started at '+8080);
});