import { set } from './localStorage'

export default async function getCredentials(password){
	try{
		const json = JSON.stringify({password})
		const request = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			mode: 'cors',
			cache: 'default',
			body: json 
		}
		const f = await fetch('/api/login', request)
		const response = await f.json()
		if(response.data){
			await set('credentials', response.data)
		}else{
			throw new Error('no creds')
		}
		return response.data 
	}catch(err){
		return err
	}
}
export const postRequest = async (url, body) => {
	try{
		const json = JSON.stringify({query: body})
		const request = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			mode: 'cors',
			cache: 'default',
			body: json
		}
		const f = await fetch('/api/login', request)
		const response = await f.json()
		return response
	}catch(err){
		return err
	}
}
