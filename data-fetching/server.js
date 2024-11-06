const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {

  console.log("Request received");
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header( "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );

  res.header("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", "0");

  next();
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});