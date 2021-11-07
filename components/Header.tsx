import getNames from '../utils/getNames'
import { HeaderProps } from '../types'
export default function Header({ 
	blurHandler,
	clearNameHandler,
	focusHandler,
	logOut,
	loggedIn, 
	newNameHandler,
	paused,
	setPaused,
	setReset,
	setStopped,
	stopped,
	token,
} : HeaderProps){

	const options = [
		stopped ? 'open timer' : 'close timer',
		paused ? 'run' : 'pause', 
		'reset',
		'pick name', 
		'clear name',
		loggedIn ? 'logout' : 'login',
	]
	const filterPerState = ((e: string,i: number) => {
		if(!loggedIn && e !== 'login'){
			return false 
		}
		if(!loggedIn && e === 'login'){
			return true
		}
		if((stopped) && (e === 'pause' || e === 'run' || e === 'reset')){
			return false
		}
		return true
	})
	const ui = options.filter(filterPerState).map((label: string, index) => {
		const className = (): string => {
			let s = 'header-nav'
			if(!loggedIn && label !== 'login'){
				s += ' nav-button-hidden';
			}
			return s
		}
		return(
			<button 
				className={className()}
				id={label} 
				key={index} 
				onBlur={blurHandler}
				onClick={(): void => {
					console.log(label, '<------ on click')
					switch (label) {
						case 'clear name':
							clearNameHandler()
						case 'close timer':
							setStopped(true)
						case 'logout':
							logOut()
						case 'open timer':
							setStopped(false)
						case 'pause':
							setPaused(true)
						case 'pick name':
							newNameHandler()
						case 'reset':
							setReset(true)
						case 'run':
							setPaused(false)
					}
				}}
				onFocus={focusHandler}
				role='button'
				tabIndex={index+1}
			>
				{label}
			</button>
		)
	})
	const className = () => {
		if(!loggedIn) return 'logged-out'
		if(stopped) return 'stopped'
		return 'nav-header'
	}
	return(
		<header className={className()}>
			{ui}	
		</header>
	)
}
