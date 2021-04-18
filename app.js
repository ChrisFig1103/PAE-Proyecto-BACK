require("dotenv").config()             
const express = require('express');    
const path = require('path');
const bodyParser=require('body-parser')
const cors=require('cors')
const hbs = require('express-handlebars');
const lessMiddleware = require('less-middleware');


/********************************/
            //Routes
/*******************************/
//-Loggin with the table's data 
//-If all the information is ok, Will show the menu
const index = require('./routes/index')

//-Menu
const menu = require('./routes/menu')
const notification = require('./routes/notification')
const correo=require('./routes/correo')
const ordenar=require('./routes/ordenar')


//Init app
const app = express();


// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout'}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');



app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));


//Use routes
app.use('/',index)
app.use('/menu',menu)
app.use('/notification',notification)
app.use('/correo',correo)
app.use('/ordenar',ordenar)

app.use('/api/employees',require('./routes/employees.routes'));
app.use('/api/cocineros',require('./routes/cocineros.routes'));
app.use('/api/platillos',require('./routes/platillos.routes'));
app.use('/api/mesas',require('./routes/mesas.routes'));

// catch 404 and forward to error handler
 app.use(function(req, res, next) {
   next(createError(404));
 });

 // error handler
 app.use(function(err, req, res, next) {
   
 // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   //res.status(err.status || 500);
   res.send("false");
 });


app.listen(3000, () => console.log('Listening on port 3000'));