const Express = require("express");
const Http = require("http");
const bodyParser = require("body-parser");
// Setup Database
const database = require("./util/database");

// Load routers
const itineraryRouter = require("./routes/ItineraryRouter");

const app = Express();
const server = Http.createServer(app);

app.use("/", Express.static("public"));

// Parse requests
app.use(bodyParser.json());

app.use(itineraryRouter);

server.listen(80);
