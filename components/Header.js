export default function Header({loggedIn}){
	const ui = ['start', 'randomize', 'login'].map((e, index) => {
		let label = e
		if(e === 'login' && loggedIn){
			label = 'logout'
		}
		return(
			<div 
				className="header-nav"
				id={label} 
				key={index} 
				onClick={() => console.log(e)}
			>{label}</div>
		)
	})
	return(
		<header >
			{ui}	
		</header>
	)
}
