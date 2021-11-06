export default function randomize(names: string[]): string{
	const r = Math.floor(Math.random() * array.length)
	const [ element ] = array.splice(r, 1)
	return element
}
