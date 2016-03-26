var fs = require("fs"); //Node's file system module
var render = require('./node_modules/php-node/index.js')({ //PHP-NODE module
	bin:"c://php//php.exe" //Location of PHP executable. You can save it anywhere on your on your system. Download from http://php.net
});

function serveStaticAsset(request, response){
    fs.readFile(request.url.substr(1), function callback(error, data) { //"substr(1)" excludes the initial "/" from "/images/favicon.png"
        if(error){
            console.log("Error: file not found " + error);
            response.statusCode = 404;
            response.end();
            return;
        }

		// Parse PHP
		if (request.url.substr(1).split('.').pop() == 'php') {
			render(request.url.substr(1), {}, function(e, r) {
					//console.log(r);
					response.end(r);
				})
		// Not a php script so no need to parse. Just return request as-is
		} else {
        response.end(data);
		}
    });
}

exports.serveStaticAsset = serveStaticAsset;