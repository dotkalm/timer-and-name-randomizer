import { useState, useEffect } from 'react'
import timerFunc from '../../shared/utils/timerFunc'
import UseInterval from './useInterval'

const startTime = '00:00:00'
type TimerProps = { paused: boolean, reset: boolean, stopped: boolean, handleReset: () => void}
export default function Timer({ paused, reset, stopped, handleReset }: TimerProps){
	const [ timer, setTimer ] = useState(startTime)

	function callbackTimer(): {}{
		if(!paused){
			setTimer(timerFunc(timer))
		}
		return {}
	}
	useEffect(() => {
		if(reset){
			setTimer(startTime)
			handleReset()
		}
	}, [ reset ])
	UseInterval(callbackTimer, 1000)

	const [ hours, minutes, seconds ] = timer.split(':')
	const [ h1, h2 ] = hours.split('')
	const [ m1, m2 ] = minutes.split('')
	const [ s1, s2 ] = seconds.split('')
	return(
		<section className={!stopped ? "timer" : "timer paused"}>
			<div>{h1}</div>
			<div>{h2}</div>
			<div className="colon-container">
				<div className="colons"></div>
				<div className="colons"></div>
			</div>
			<div>{m1}</div>
			<div>{m2}</div>
			<div className="colon-container">
				<div className="colons"></div>
				<div className="colons"></div>
			</div>
			<div>{s1}</div>
			<div>{s2}</div>
		</section>
	)
}
