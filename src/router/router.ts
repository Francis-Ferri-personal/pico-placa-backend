import { Router, Request, Response } from "express";

const router = Router();

router.post("/pico-placa", (req: Request, res: Response) => {
	// license plate number
	// date
	// time
	console.log(req);

	res.status(200).json({
		ok: true,
		msg: "Test successful"
		// can be on the road?
	});
});

export default router;
