export default function randomize(array: string[]): string{
	const r = Math.floor(Math.random() * array.length)
	const [ element ] = array.splice(r, 1)
	return element
}
