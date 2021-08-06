import express from "express";
var cors = require("cors");
import path from "path";

export default class Server {
	public app: express.Application;
	public port: number;

	constructor(puerto: number) {
		this.port = puerto;
		this.app = express();
		this.app.use(cors());
	}

	static init(puerto: number) {
		return new Server(puerto);
	}

	private publicFolder() {
		const publicPath = path.resolve(__dirname, "../public");
		this.app.use(express.static(publicPath));
	}

	start(callback: () => void) {
		this.app.listen(this.port, callback);
		this.publicFolder();
	}
}
