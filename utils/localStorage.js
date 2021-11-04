export const set = (key, valueProp) => {
	let value = valueProp
	if (!localStorage || typeof window === 'undefined') {
		console.warn('localStorage not supported')
		return null
	}

	if (typeof value === 'undefined') {
		console.warn('localStorage was passed null/undefined value')
		return null
	}
	if (key === null || typeof key === 'undefined') {
		console.warn('localStorage was passed null/undefined key')
		return null
	}

	if (localStorage && localStorage.getItem(key)) {
		// console.warn(`tried to set a value, but a ${ key } is already set, overwriting`)
	}
	if (typeof value === 'object') {
		value = JSON.stringify(value)
	}
	localStorage.setItem(key, value)
	return true
}

export const setAll = (obj) => {
	if (!localStorage || typeof window === 'undefined') {
		console.warn('localStorage not supported')
		return Promise.resolve()
	}
	if (!obj || typeof obj !== 'object') {
		console.warn('localStorage was passed a non-object or null')
		return Promise.resolve()
	}
	return Promise.all(
		Object.keys(obj).forEach((key) => {
			set(key, obj[key])
		})
	)
}

export const get = (key) => {
	if (!localStorage || typeof window === 'undefined') {
		console.warn('localStorage not supported')
		return null
	}
	if (localStorage && !localStorage.getItem(key)) {
		console.warn(`tried to get a value, but no value is set for ${key}`)
	}
	const value = localStorage.getItem(key)
	try {
		const newValue = JSON.parse(value)
		return newValue
	} catch {
		return value
	}
}

export const del = (key) => {
	if (!localStorage || typeof window === 'undefined') {
		console.warn('localStorage not supported')
		return null
	}
	return localStorage.removeItem(key)
}
