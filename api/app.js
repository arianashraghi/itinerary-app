const Express = require("express");
const Http = require("http");
const bodyParser = require("body-parser");

// Load routers
const itineraryRouter = require("./routes/ItineraryRouter");

const app = Express();
const server = Http.createServer(app);

// Parse requests
app.use(bodyParser.json());

app.use(itineraryRouter);

server.listen(80);
