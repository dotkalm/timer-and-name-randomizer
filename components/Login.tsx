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
			<input 
				name="password" 
				onBlur={blurHandler} 
				onChange={formHandler}
				onFocus={focusHandler} 
				type="password" 
				value={formInput} 
			/>
			<button  onFocus={focusHandler} onBlur={blurHandler} onClick={loginHandler} >get credentials</button>
		</div>
	)
}
