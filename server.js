var http = require("http"); //Node's http protocol module
var static = require("./static.js"); //Display the web page

http.createServer(function webRequestHandler(request, response){
    //debugger;
    //console.log(`Incoming request: ${request.url}`);
    static.serveStaticAsset(request, response);
    return;

}).listen(3000,"127.0.0.1", () => {
    console.log(`Server is listening on http://localhost:3000`);
});