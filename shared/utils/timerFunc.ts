export default function timerFunc(time: string): string{
	let [ hours, minutes, seconds ] = time.split(':')
	hours = Number(hours)
	minutes = Number(minutes)
	seconds = Number(seconds) + 1
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

