import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Timer from '../components/timer/timer'
import checkLogged from '../utils/checkLogged'
import getCredentials from '../utils/getCredentials'
import getNames from '../utils/getNames'
import randomize from '../utils/randomizeNames'
import styles from '../styles/Home.module.css'
import { del as deleteStorage, get as getStorage } from '../utils/localStorage'
import { FormHandlerType, ClickHandlerType } from '../types'

export default function Home(){
	const [ focused, setFocused ] = useState(false)
	const [ formInput, setFormInput ] = useState<string>('')
	const [ hidden, setHidden ] = useState(true)
	const [ loggedIn, setLoggedIn ] = useState(false)
	const [ names, setNames ] = useState<string[][]>([[]])
	const [ paused, setPaused ] = useState(true)
	const [ reset, setReset ] = useState(false)
	const [ stopped, setStopped ] = useState(true)
	const [ token, setToken ] = useState('')
	const [ name, setName ] = useState('')

	useEffect(() => {
		const keyPressHandler = ({key}: {key: string}): void => {
			if(key === ' '){
				setPaused(!paused)
			}else if(key === 'Backspace'){
				setReset(true)
			}else{
				console.log('new name')
			}
		}
		if(!focused){
			window.addEventListener('keydown', keyPressHandler);
			return () => {
				window.removeEventListener('keydown', keyPressHandler);
			}
		}
		if(reset){
			setReset(false)
		}
	}, [ paused, reset, focused ])

	useEffect(() => {
		if(!loggedIn && !token){
			const hasCreds = checkLogged()
			setToken(hasCreds)
			if(hasCreds){
				setLoggedIn(true)
			}
		}
	}, [ token, loggedIn, focused ])

	const logOut = () => {
		setToken('')
		setLoggedIn(false)
		deleteStorage('credentials')
		deleteStorage('names')
		setNames([])
		setName('')
	}
	
	const blurHandler = (): void => setFocused(false)
	const loginHandler: ClickHandlerType = async () => {
		const token = await getCredentials(formInput)
		if(!(token instanceof Error)){
			setLoggedIn(true)
		}
	}
	const focusHandler = () => setFocused(true)
	const formHandler: FormHandlerType = ({target:{value}}) => {
		setFormInput(value)
	}
	const clearNameHandler = () => setName('')
	const newNameHandler = () => {
		const [ first, ...rest ] = names
		const namesFromStorage = getStorage('names')
		let newName: string = randomize(namesFromStorage) 
		if(first.length === namesFromStorage.length){
			setName(newName)
			setNames([[ newName ], first, ...rest])
		}else{
			newName = randomize(namesFromStorage) 
			while(first.includes(newName)){
				newName = randomize(namesFromStorage) 
			}
			setName(newName)
			setNames([[ newName, ...first ], ...rest])
		}
	}
	const handleReset = (): void => setReset(!reset)
  return (
		<main>
			<Header 
				blurHandler={blurHandler}
				newNameHandler={newNameHandler}
				clearNameHandler={clearNameHandler}
				focusHandler={focusHandler}
				logOut={logOut} 
				loggedIn={loggedIn} 
				paused={paused}
				setPaused={setPaused}
				setReset={setReset}
				setStopped={setStopped}
				stopped={stopped}
				token={token}
			/>
			<Timer 
				paused={paused} 
				reset={reset} 
				handleReset={handleReset}
				stopped={stopped}
			/>
			{!loggedIn && <Login
				blurHandler={blurHandler}
				focusHandler={focusHandler}
				formHandler={formHandler}
				formInput={formInput} 
				loginHandler={loginHandler} 
				hidden={hidden} 
			/>}
			<div>{name && name}</div>
		</main>
  )
} 
