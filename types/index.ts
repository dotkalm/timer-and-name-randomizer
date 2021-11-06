export type BooleanHook = (x: boolean) => void
export type VoidFunction = () => void 

export type ArrayOfFunctions = (VoidFunction) | BooleanHook)

export type HeaderProps = { 
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

export type TimerProps = { 
	handleReset: VoidFunction,
	paused: boolean, 
	reset: boolean, 
	stopped: boolean, 
}
export type LoginProps = {
	blurHandler: VoidFunction,
	focusHandler: VoidFunction,
	formHandler: VoidFunction,
	formInput: string, 
	loginHandler: VoidFunction, 
	hidden: boolean, 
}
