import { ChangeEvent, MouseEvent} from 'react'

export type BooleanHook = (x: boolean) => void
export type VoidFunction = () => void 
export type GetCredentialsType = (x : string) => Promise<Error | string>
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
export type ClickHandlerType = (e: MouseEvent<HTMLButtonElement>) => void
export type FormHandlerType = (x: ChangeEvent<HTMLInputElement>) => void 
export type LoginProps = {
	blurHandler: VoidFunction,
	focusHandler: VoidFunction,
	formHandler: FormHandlerType,
	formInput: string, 
	loginHandler: ClickHandlerType, 
	hidden: boolean, 
}
