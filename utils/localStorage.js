export const set = (key, valueProp) => {
	let value = valueProp
	if (!localStorage || typeof window === 'undefined') {
		return null
	}

	if (typeof value === 'undefined') {
		return null
	}
	if (key === null || typeof key === 'undefined') {
		return null
	}
	if (typeof value === 'object') {
		value = JSON.stringify(value)
	}
	localStorage.setItem(key, value)
	return true
}

export const setAll = (obj) => {
	if (!localStorage || typeof window === 'undefined') {
		return Promise.resolve()
	}
	if (!obj || typeof obj !== 'object') {
		return Promise.resolve()
	}
	return Promise.all(
		Object.keys(obj).forEach((key) => {
			set(key, obj[key])
		})
	)
}
function catchJSONNotString(value){
	try{
		const reviver = (key, value) => {
			console.log(key, value)
			return value
		}
		return JSON.parse(value, reviver)
	}catch(error){
		return value
	}
}
export const get = key => {
	try {
		if (!localStorage || typeof window === 'undefined') {
			throw new Error('no local storage or window undefined')
		}
		if (localStorage && !localStorage.getItem(key)){
			throw new Error('does not exist')
		}
		return catchJSONNotString(localStorage.getItem(key))
	}catch(e){
		return e 
	}
}

export const del = (key) => {
	if (!localStorage || typeof window === 'undefined') {
		return null
	}
	return localStorage.removeItem(key)
}
