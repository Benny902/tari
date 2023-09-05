const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //lodash test
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello'); 
    });

    greet();
    greet(); // because of the "_.once" it will not greet 2nd time, eventough we called it 2nd time.

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; // ok status code
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; // ok status code
            break;
        case '/about-me': // redirect example (old 'about-me' page to 'about' page)
            res.statusCode = 301; // page moved code
            res.setHeader('Location', '/about'); // redirect to new about page
            res.end();
            break;
        case '/collect':
            path += 'collect.html';
            res.statusCode = 200; // ok status code
            break;
        case '/customer':
            path += 'customer.html';
            res.statusCode = 200; // ok status code
            break;
        default:
            path += '404.html';
            res.statusCode = 404; // error code
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //res.write(data);
            
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');
});
