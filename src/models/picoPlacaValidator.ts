import moment from "moment";

const timeFormat = "hh:mm";
const TIME_RULES = {
	morning: [moment("07:00:00", timeFormat), moment("09:30:00", timeFormat)],
	afternoon: [moment("16:00:00", timeFormat), moment("19:30:00", timeFormat)]
};

const DAY_RULES: { [id: string]: number[] } = {
	Monday: [1, 2],
	Tuesday: [3, 4],
	Wednesday: [5, 6],
	Thrusday: [7, 8],
	Friday: [9, 0]
};

class PicoPlacaValidator {
	private licencePlateNumber: string;
	private date: string;
	private time: string;

	constructor(licencePlateNumber: string, date: string, time: string) {
		this.licencePlateNumber = licencePlateNumber;
		this.date = date;
		this.time = time;
	}

	validatePicoPlaca(): boolean {
		const time = moment(this.time, timeFormat);
		const [moningStart, morningEnd] = TIME_RULES.morning;
		const [afternoonStart, afternoonEnd] = TIME_RULES.afternoon;

		if (
			time.isBetween(moningStart, morningEnd) ||
			time.isBetween(afternoonStart, afternoonEnd)
		) {
			const day = moment(this.date).format("dddd");
			const picoPlacaDays = DAY_RULES[day];
			if (picoPlacaDays) {
				const lastDigit = Number(this.licencePlateNumber.slice(-1));
				if (picoPlacaDays.includes(lastDigit)) {
					return false;
				}
			}
		}
		return true;
	}
}

export default PicoPlacaValidator;
