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
		const f = await fetch('/api/names', request)
		const response = await f.json()
		if(response.errors){
			throw new Error('wrong token or no data')
		}
		const names = response.data.split(', ')
		await setItem('names', names) 
		return names 
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
