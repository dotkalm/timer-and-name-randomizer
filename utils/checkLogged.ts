import { get } from './localStorage'

export default function checkLogged(){
	try{
		const creds = get('credentials') 
		if(creds instanceof Error){
			return false
		}
		return creds
	}catch(e){
		return false
	}
}
