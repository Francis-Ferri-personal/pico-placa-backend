import express from "express";
import path from "path";
import cors from "cors";

export default class Server {
	public app: express.Application;
	public port: number;

	constructor(puerto: number) {
		this.port = puerto;
		this.app = express();
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(
			express.urlencoded({
				extended: true
			})
		);
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
