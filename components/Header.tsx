import getNames from '../utils/getNames'
type BooleanHook = (x: boolean) => void
type VoidFunction = () => {}
type HeaderProps = { 
	blurHandler: VoidFunction,
	clearNameHandler: VoidFunction,
	focusHandler: VoidFunction,
	logOut: VoidFunction,
	loggedIn: boolean, 
	newNameHandler: VoidFunction,
	paused: boolean,
	setPaused: BooleanHook,
	setReset: BooleanHook,
	setStopped: BooleanHook,
	stopped: boolean,
	token: string,
}
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
	type EventHandlerMap = {
		login: undefined,
		logout: VoidFunction,
		pause: BooleanHook,
		run: BooleanHook,
		reset: BooleanHook, 
		'pick name': VoidFunction,
		'clear name': VoidFunction,
		'open timer': BooleanHook,
		'close timer': BooleanHook,
	} 
	const eventHandlerMap: EventHandlerMap = { 
		login: undefined,
		logout: logOut,
		pause: () => setPaused(!paused),
		run: () => setPaused(!paused),
		reset: () => setReset(true),
		'pick name': () => newNameHandler(),
		'clear name': () => clearNameHandler(),
		'open timer': () => setStopped(false),
		'close timer': () => setStopped(true),
	}
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
		const style = (!loggedIn && label !== 'login') ? {visibility: 'hidden'} : {}
		if(Object.keys(eventHandlerMap).includes(label)){
			return(
				<button 
					className="header-nav"
					id={label} 
					key={index} 
					onBlur={blurHandler}
					onClick={eventHandlerMap[label]}
					onFocus={focusHandler}
					role='button'
					style={style}
					tabIndex={index+1}
				>{label}</button>
			)
		}else{
			return(<div key={index}></div>)
		}
	})
	return(
		<header className={stopped ? 'stopped' : 'nav-header'}>
			{ui}	
		</header>
	)
}
