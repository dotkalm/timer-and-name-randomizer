import { set as setItem } from './localStorage'

export default async function getCredentials(password: string): Promise<Error | string>{
	try{
		const f = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify({password})
		})
		const response = await f.json()
		if(response.errors){
			throw new Error('no creds')
		}
		await setItem('credentials', response.data)
		return response.data 
	}catch(err){
		if(err instanceof Error){
			return err 
		}
		return 'uncaught error'
	}
}
