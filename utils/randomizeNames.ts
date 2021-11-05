export default function* randomize(names){
	while(true){
		const array = [...names]
		while(array.length > 0){
			const r = Math.floor(Math.random() * array.length)
			const [ element ] = array.splice(r, 1)
			yield element
		}
	}
}
