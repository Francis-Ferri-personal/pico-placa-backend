import { Router, Request, Response } from "express";

const router = Router();

router.post("/pico-placa", (req: Request, res: Response) => {
	const { plateNumber, date, time } = req.body;

	res.status(200).json({
		ok: true,
		allowed: true,
		msg: "Test successful"
		// can be on the road?
	});
});

export default router;
