import { useState } from 'react'
import timerFunc from '../../shared/utils/timerFunc'
import UseInterval from './useInterval'

export default function Timer(){
	const [ timer, setTimer ] = useState('00:00:00')
	UseInterval(() => setTimer(timerFunc(timer)), 1000)
	const [ hours, minutes, seconds ] = timer.split(':')
	return(
		<section>
			<div>{hours}</div>
			<div>{minutes}</div>
			<div>{seconds}</div>
		</section>
	)
}
