import { Router, Request, Response } from "express";
import PicoPlacaValidator from "../models/picoPlacaValidator";

const router = Router();

router.post("/pico-placa", (req: Request, res: Response) => {
	const { plateNumber, date, time } = req.body;

	const picoPlacaValidator = new PicoPlacaValidator(plateNumber, date, time);

	const allowed = picoPlacaValidator.validatePicoPlaca();
	if (!allowed) {
		res.status(200).json({
			allowed,
			msg: `Not allowed to drive - date: ${date} time: ${time}`
		});
		return;
	}

	res.status(200).json({
		allowed,
		msg: `Allowed to drive - date: ${date} time: ${time}`
		// can be on the road?
	});
});

export default router;
