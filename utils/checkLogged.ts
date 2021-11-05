import { get } from './localStorage'

export default function checkLogged(){
	try{
		const creds = get('credentials') 
		if(creds instanceof Error){
			console.log(creds)
			return false
		}
		return creds
	}catch(e){
		console.log(e)
		return false
	}
}
