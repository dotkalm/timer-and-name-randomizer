import { get } from './localStorage'

export default function checkLogged(){
	const creds = get('credentials')
	console.log(creds)
}
