import { Router, Request, Response } from "express";

const router = Router();

router.post("/pico-placa", (req: Request, res: Response) => {
	// const id = req.params.id;
	res.status(200).json({
		ok: true,
		msg: "Test successful"
	});
});

export default router;
