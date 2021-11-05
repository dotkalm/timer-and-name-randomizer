export default function Header({ 
	blurHandler,
	focusHandler,
	logOut,
	loggedIn, 
}){
	const ui = ['start', 'randomize', 'login'].map((label, index) => {
		if(label === 'login' && loggedIn){
			return(
				<div 
					className="header-nav"
					id={label} 
					key={index} 
					onBlur={blurHandler}
					onClick={logOut}
					onFocus={focusHandler}
					role='button'
					tabIndex={index+1}
				>logout</div>
			)
		}
		const style = loggedIn ? {} : {visibility: 'hidden'}
		return(
			<div 
				className="header-nav"
				id={label} 
				key={index} 
				onBlur={blurHandler}
				onClick={() => console.log(label)}
				onFocus={focusHandler}
				role='button'
				style={style}
				tabIndex={index+1}
			>{label}</div>
		)
	})
	return(
		<header >
			{ui}	
		</header>
	)
}
