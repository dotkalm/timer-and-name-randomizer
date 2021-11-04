import { useState, useEffect } from 'react'
import timerFunc from '../../shared/utils/timerFunc'
import UseInterval from './useInterval'

const startTime = '00:00:00'

export default function Timer({ paused, reset, setReset }){
	const [ timer, setTimer ] = useState(startTime)

	function callbackTimer(): undefined{
		if(!paused){
			setTimer(timerFunc(timer))
		}
		return undefined
	}
	console.log({paused, reset})
	useEffect(() => {
		if(reset){
			setTimer(startTime)
			setReset(false)
		}
	}, [ reset ])
	UseInterval(callbackTimer, 1000)

	const [ hours, minutes, seconds ] = timer.split(':')
	const [ h1, h2 ] = hours.split('')
	const [ m1, m2 ] = minutes.split('')
	const [ s1, s2 ] = seconds.split('')
	return(
		<section className={!paused ? "timer" : "timer paused"}>
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
