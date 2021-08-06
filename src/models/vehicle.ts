class PicoPlacaValidator {
	private licencePlateNumber: string;
	private date: string;
	private time: number;
	// license plate number
	// date
	// time
	constructor(licencePlateNumber: string, date: string, time: number) {
		this.licencePlateNumber = licencePlateNumber;
		this.date = date;
		this.time = time;
	}

	validatePicoPlaca() {
		// Monday Tuesday Wednesday Thrusday Friday
		const DayRules = {
			Monday: [1, 2],
			Tuesday: [3, 4],
			Wednesday: [5, 6],
			Thrusday: [7, 8],
			Friday: [9, 0]
		};

		const TimeRules = {
			morning: ["7:00", "9:30"],
			afternoon: ["16:00", "19:30"]
		};
	}
}
