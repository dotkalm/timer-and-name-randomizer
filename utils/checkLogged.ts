import { get } from './localStorage'

export default function checkLogged(){
	return get('credentials') 
}
