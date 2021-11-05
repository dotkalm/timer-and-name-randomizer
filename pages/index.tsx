import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Randomizer from '../components/randomized'
import Timer from '../components/timer/timer'
import getCredentials from '../utils/getCredentials'
import styles from '../styles/Home.module.css'
import checkLogged from '../utils/checkLogged'
import { del as deleteStorage, get as getStorage } from '../utils/localStorage'

export default function Home(): NextPage{
	const [ focused, setFocused ] = useState(false)
	const [ formInput, setFormInput ] = useState('')
	const [ hidden, setHidden ] = useState(true)
	const [ loggedIn, setLoggedIn ] = useState(false)
	const [ names, setNames ] = useState([])
	const [ paused, setPaused ] = useState(true)
	const [ reset, setReset ] = useState(false)
	const [ stopped, setStopped ] = useState(true)
	const [ token, setToken ] = useState('')

	useEffect(() => {
		const keyPressHandler = ({key, code}): void => {
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
			console.log(hasCreds)
			setToken(hasCreds)
			if(hasCreds){
				setLoggedIn(true)
			}
		}
	}, [ token, loggedIn, focused ])

	useEffect(() => {
		if(loggedIn){
			const namesFromStorage = getStorage('names')
			
			if(!(namesFromStorage instanceof Error) && names.length !== namesFromStorage.length){
				setNames(previous => {
					console.log(names, namesFromStorage, Array.isArray(namesFromStorage))
					return namesFromStorage
				})
			}
		}
	},[ names, loggedIn ])
	const logOut = () => {
		setToken('')
		setLoggedIn(false)
		deleteStorage('credentials')
		deleteStorage('names')
		setNames([])
	}
	
	const blurHandler = () => setFocused(false)
	const clickHandler = () => {
		getCredentials(formInput)
			.then(o => {
				console.log(o, o instanceof Error)
				if(o instanceof Error){
					setLoggedIn(false)
				}else{
					setLoggedIn(true)
				}
			})
	}
	const focusHandler = () => setFocused(true)
	const formHandler = ({target: {value}}) => setFormInput(value)

  return (
		<main>
			<Header 
				blurHandler={blurHandler}
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
				setReset={setReset}
				stopped={stopped}
			/>
			{!loggedIn && <Login
				blurHandler={blurHandler}
				focusHandler={focusHandler}
				formHandler={formHandler}
				formInput={formInput} 
				clickHandler={clickHandler} 
				hidden={hidden} 
			/>}
			<Randomizer names={names}/>
		</main>
  )
} 
