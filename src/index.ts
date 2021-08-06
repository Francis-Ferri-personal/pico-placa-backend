import Server from "./server/server";
import router from "./router/router";

const port = Number(process.env.PORT) || 4000;
const server = Server.init(port);
server.app.use(router);

server.start(() => {
	console.log(`Server running at port ${port}`);
});
