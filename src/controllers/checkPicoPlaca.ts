import { Request, Response } from "express";
import moment from "moment";
import PicoPlacaValidator from "../models/picoPlacaValidator";
import { PicoPlacaData } from "../types/picoPlaca";

const checkPicoPlaca = (req: Request, res: Response) => {
	const { plateNumber, date, time } = req.body;

	const { plateVal, dateVal, timeVal } = validateForm({
		plateNumber,
		date,
		time
	});

	if (!(plateVal && dateVal && timeVal)) {
		console.log("Error in the data of the request");
		res.status(200).json({
			ok: false,
			allowed: false,
			msg: `Error in the data of the request`
		});
		return;
	}

	const picoPlacaValidator = new PicoPlacaValidator(plateNumber, date, time);

	const allowed = picoPlacaValidator.validatePicoPlaca();
	if (!allowed) {
		res.status(200).json({
			ok: true,
			allowed,
			msg: `Not allowed to drive - date: ${date} time: ${time}`
		});
		return;
	}

	res.status(200).json({
		ok: true,
		allowed,
		msg: `Allowed to drive - date: ${date} time: ${time}`
	});
};

const validateForm = ({ plateNumber, date, time }: PicoPlacaData) => {
	const plateRegExp = new RegExp("^[A-Z]{3}-[0-9]{3}$");
	const plateVal = plateRegExp.test(plateNumber.toUpperCase());

	const dateVal = moment(date, "yyyy-mm-dd").isValid();

	const timeVal = moment(time, "hh:mm").isValid();
	return { plateVal, dateVal, timeVal };
};

export default checkPicoPlaca;
