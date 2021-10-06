export default function timerFunc(time: string): string{
	function splitTime(t: string[]) : number[] {
		return [ Number(t[0]), Number(t[1]), Number(t[2]) + 1 ]
	}
	let [ hours, minutes, seconds ] = splitTime(time.split(':'))
	if(seconds === 60){
		seconds = 0
		minutes += 1
	}
	if(minutes === 60){
		hours += 1
		minutes = 0
	}
	let timeArray = [hours, minutes, seconds].map(unit => unit < 10 ? `0${unit}`: `${unit}`)
	return timeArray.join(':')
}

