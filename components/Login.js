export default function Login({ 
	blurHandler,
	focusHandler,
	formHandler,
	formInput, 
	clickHandler, 
	hidden, 
}){
	return(
		<div className="log-in-form">
			<input onFocus={focusHandler} onBlur={blurHandler} name="password" type="password" value={formInput} onChange={formHandler}/>
			<button  onFocus={focusHandler} onBlur={blurHandler} onClick={clickHandler} >get credentials</button>
		</div>
	)
}
