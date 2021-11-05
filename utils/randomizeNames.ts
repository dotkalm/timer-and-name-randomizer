export default function randomize(array, object={ 1: [] }){
	if(array.length === 0) return object;
	const r1 = Math.floor(Math.random() * array.length)
	const r2 = Math.floor(Math.random() * array.length)
	const [ name1 ] = array.splice(r1, 1)
	const [ name2 ] = array.splice(r2, 1)
	return [ name1, name2 ] 
}

//const randomNames = randomize(names)

