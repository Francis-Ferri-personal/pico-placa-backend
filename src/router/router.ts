import { Router, Request, Response } from "express";
import checkPicoPlaca from "../controllers/checkPicoPlaca";

const router = Router();

router.post("/pico-placa", (req: Request, res: Response) => {
	checkPicoPlaca(req, res);
});

export default router;
