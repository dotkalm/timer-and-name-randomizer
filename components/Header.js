export default function Header(){
	const ui = ['start', 'randomize', 'login'].map((e, index) => {
		return(
			<div 
				className="header-nav"
				id={e} 
				key={index} 
				onClick={() => console.log(e)}
			>{e}</div>
		)
	})
	return(
		<header >
			{ui}	
		</header>
	)
}
