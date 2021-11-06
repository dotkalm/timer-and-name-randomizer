import getNames from '../utils/getNames'
import { HeaderProps, ArrayOfFunctions } from '../types'
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
	const keysArray = [ 
		'clear name',
		'close timer',
		'logout',
		'open timer',
		'pause',
		'pick name',
		'reset',
		'run',
	]
	const eventHandlerArray: ArrayOfFunctions[] = [ 
		clearNameHandler,
		setStopped,
		setStopped,
		newNameHandler,
		logOut,
		setPaused,
		setReset,
		setPaused,
	]
	const options = [
		stopped ? 'open timer' : 'close timer',
		paused ? 'run' : 'pause', 
		'reset',
		'pick name', 
		'clear name',
		loggedIn ? 'logout' : 'login',
	]
	const filterPerState = ((e: string,i: number) => {
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
		const keyIndex: number = keysArray.indexOf(label)
		return(
			<button 
				className={className()}
				id={label} 
				key={index} 
				onBlur={(): void => blurHandler()}
				onClick={() => eventHandlerArray[keyIndex]()}
				onFocus={focusHandler}
				role='button'
				tabIndex={index+1}
			>
				{label}
			</button>
		)
	})
	return(
		<header className={stopped ? 'stopped' : 'nav-header'}>
			{ui}	
		</header>
	)
}
