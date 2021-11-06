import { LoginProps } from '../types'
export default function Login({ 
	blurHandler,
	focusHandler,
	formHandler,
	formInput, 
	loginHandler, 
	hidden, 
}: LoginProps){
	return(
		<div className="log-in-form">
			<input onFocus={focusHandler} onBlur={blurHandler} name="password" type="password" value={formInput} onChange={formHandler}/>
			<button  onFocus={focusHandler} onBlur={blurHandler} onClick={loginHandler} >get credentials</button>
		</div>
	)
}
