import { set as setItem } from './localStorage'

export default async function getNames(token: string): Promise<Error | string[]>{
	try{
		const f = await fetch('/api/names', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'authorization': token,
			},
			mode: 'cors',
			cache: 'default',
		})
		const response = await f.json()
		if(response.errors){
			throw new Error('wrong token or no data')
		}
		const names = response.data.split(', ')
		await setItem('names', names) 
		return names 
	}catch(err){
		if(err instanceof Error){
			return err 
		}
		return new Error('uncaught error')
	}
}
