export default function Header({ loggedIn, logOut }){
	const ui = ['start', 'randomize', 'login'].map((label, index) => {
		if(label === 'login' && loggedIn){
			return(
				<div 
					className="header-nav"
					id={label} 
					key={index} 
					onClick={logOut}
				>logout</div>
			)
		}
		const style = loggedIn ? {} : {visibility: 'hidden'}
		return(
			<div 
				className="header-nav"
				id={label} 
				key={index} 
				onClick={() => console.log(label)}
				style={style}
			>{label}</div>
		)
	})
	return(
		<header >
			{ui}	
		</header>
	)
}
