import fetch from 'node-fetch'
import { set as setItem } from './localStorage'

export default async function getNames(token){
	try{
		const request = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'authorization': token,
			},
			mode: 'cors',
			cache: 'default',
		}
		console.log(request)
		const f = await fetch('/api/names', request)
		console.log(f)
		const response = await f.json()
		if(response.errors){
			throw new Error('wrong token or no data')
		}
		await setItem('names', response.data)
		console.log(response.data)
		return response.data 
	}catch(err){
		console.log(err)
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
