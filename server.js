/** Created by Malte on 23.04.2018. */


var http = require('http');

http.createServer( (req,res) => {
     res.write('Hello World');
     res.end();
}).listen(8080);

