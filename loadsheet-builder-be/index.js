require('dotenv').config();
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const logger = morgan('dev');
const hostname = '127.0.0.1';
//Register Middleware

const {cAndVRouter, saveLoadRouter, savedLoadRouter  } = require('./routes')

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// disabling for local development
// app.use(helmet());
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
const server = http.createServer(app);
// app.get('/', (req, res) =>{
//     res.send('Your app is running. Start building!')
// });

app.use('/productCandVs', cAndVRouter)
// app.post('/save', (req, res) => {
//     console.log('here is req.body', req.body);
//     res.json('saving load');
// })

// app.get('/saved-loads/get-load/:id', (req, res) => {
//     console.log('line 48 function is working')
//     const { id } = req.params;


//     console.log(id)
//     res.json(id)
// })

app.use('/save', saveLoadRouter)
app.use('/saved-loads', savedLoadRouter)


//Error Handling for Bad Routes
app.get('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

server.listen(3030, hostname, () => {
    console.log('Server running at localhost, port 3030');
});

