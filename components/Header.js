export default function Header({ 
	blurHandler,
	focusHandler,
	logOut,
	loggedIn, 
	paused,
	setPaused,
	setReset,
	setStopped,
	stopped,
}){
	const eventHandlerMap = { 
		login: () => console.log('login'),
		logout: logOut,
		pause: () => setPaused(!paused),
		run: () => setPaused(!paused),
		reset: () => setReset(true),
		'pick name': () => console.log('pickname'),
		start: () => setStopped(false),
		stop: () => setStopped(true),
	}
	const options = [
		stopped ? 'start' : 'stop',
		paused ? 'run' : 'pause', 
		'reset',
		'pick name', 
		loggedIn ? 'logout' : 'login',
	]
	const filterPerState = ((e,i) => {
		if((stopped) && (e === 'pause' || e === 'run' || e === 'reset')){
			return false
		}
		return true
	})
	const ui = options.filter(filterPerState).map((label, index) => {
		const style = (!loggedIn && label !== 'login') ? {visibility: 'hidden'} : {}
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
	})
	return(
		<header className={stopped ? 'stopped' : 'nav-header'}>
			{ui}	
		</header>
	)
}
