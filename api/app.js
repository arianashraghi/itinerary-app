const Express = require("express");
const Http = require("http");
const bodyParser = require("body-parser");

// Load routers
const itineraryRouter = require("./routes/ItineraryRouter");

const app = Express();
const server = Http.createServer(app);

app.use(itineraryRouter);

// Parse requests
app.use(bodyParser.json());

server.listen(80);
