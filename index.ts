import * as http from "http";
import App from "./app";

const port = process.env.PORT;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

server.on("listening", function (): void {
  const addr = server.address();
});

module.exports = App;
