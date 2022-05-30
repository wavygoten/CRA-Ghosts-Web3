import React from "react";

interface Props {}

const Countdown = (props: Props) => {
	function minTwoDigits(n: number) {
		return (n < 10 ? "0" : "") + n;
	}

	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference =
			+new Date(`10/31/${year}`).setHours(
				+new Date(`10/31/${year}`).getHours() + 0
			) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: minTwoDigits(Math.floor(difference / (1000 * 60 * 60 * 24))),
				hours: minTwoDigits(Math.floor((difference / (1000 * 60 * 60)) % 24)),
				minutes: minTwoDigits(Math.floor((difference / 1000 / 60) % 60)),
				seconds: minTwoDigits(Math.floor((difference / 1000) % 60)),
			};
		} else {
			// release mint function here but dont allow minting
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = React.useState<any>(calculateTimeLeft());

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<div className="countdown-wrapper dark:bg-maindark dark:text-mainlight w-screen px-4 md:px-20 py-12">
			<div className="header-1 flex flex-row justify-center mb-10">
				Countdown Until Mint
			</div>
			<div className="countdown-container w-full px-4 py-12 flex flex-col justify-center items-center self-center flex-wrap  dark:bg-navdark select-none rounded-xl">
				<div className="top-list flex flex-row justify-around items-center self-center mb-10 w-full text-center">
					<div>Days</div>
					<div>Hours</div>
					<div>Mins</div>
					<div>Secs</div>
				</div>
				<div className="bottom-list flex flex-row justify-evenly items-center self-center w-full text-center">
					<div>{timeLeft?.days}</div>
					<div>:</div>
					<div>{timeLeft?.hours}</div>
					<div>:</div>
					<div>{timeLeft?.minutes}</div>
					<div>:</div>
					<div>{timeLeft?.seconds}</div>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
