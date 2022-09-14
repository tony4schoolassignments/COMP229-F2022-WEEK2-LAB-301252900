const connect = require('connect');
const app = connect()

/* Function that displays HTTP response as text */
function textPlain(req, res, next){
    res.setHeader('Content-Type', 'text/Plain');
    res.end('Hello from NodeJS Application');
};

/* Function that displays HTTP response as html h1 */
function textHtml(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};

/* Function that displays HTTP response as json */
function appJson(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end('{“message”: “Hello from NodeJS Application as json”}');
};

// Request URL: http://localhost:3000/html. Calls function textHTML
app.use('/html', textHtml);

// Request URL: http://localhost:3000/json. Calls function appJson
app.use('/json', appJson);

// Default request URL: http://localhost:3000/. Calls function textPlain
app.use('/', textPlain);

app.listen(3000);