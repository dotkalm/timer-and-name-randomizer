import { useState } from 'react'
import timerFunc from '../../shared/utils/timerFunc'
import UseInterval from './useInterval'

export default function Timer(){
	const [ timer, setTimer ] = useState('00:00:00')
	function callbackTimer(): any{
		setTimer(timerFunc(timer))
		return undefined
	}
	UseInterval(callbackTimer, 1000)
	const [ hours, minutes, seconds ] = timer.split(':')
	const [ h1, h2 ] = hours.split('')
	const [ m1, m2 ] = minutes.split('')
	const [ s1, s2 ] = seconds.split('')
	return(
		<section className="timer">
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
