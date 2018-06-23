var http = request("http");

var PORT = 7500;

function handleRequest(request, reponse) {
    response.end("BAD things" + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});