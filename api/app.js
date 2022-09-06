const Express = require("express");
const Http = require("http");
const bodyParser = require("body-parser");

const app = Express();
const server = Http.createServer(app);

// Parse requests
app.use(bodyParser.json());

server.listen(80);
