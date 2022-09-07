const Express = require("express");
const Http = require("http");
const bodyParser = require("body-parser");
const corsMiddleware = require("./middlewares/cors");
// Setup Database
const database = require("./util/database");

// Load routers
const itineraryRouter = require("./routes/ItineraryRouter");

const app = Express();
const server = Http.createServer(app);

app.use("/", Express.static("public"));

// Middlewares
// Parse requests
app.use(bodyParser.json());
// Handles cors
app.use(corsMiddleware);

app.use(itineraryRouter);

// TODO use environment variable
server.listen(80);
