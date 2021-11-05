import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Randomizer from '../components/randomized'
import Timer from '../components/timer/timer'
import getCredentials from '../utils/getCredentials'
import styles from '../styles/Home.module.css'
import checkLogged from '../utils/checkLogged'

export default function Home(): NextPage{
	const [ formInput, setFormInput ] = useState('')
	const [ hidden, setHidden ] = useState(true)
	const [ paused, setPaused ] = useState(true)
	const [ reset, setReset ] = useState(false)
	const [ focused, setFocused ] = useState(false)
	const [ loggedIn, setLoggedIn ] = useState(false)
	const [ token, setToken ] = useState('')

	useEffect(() => {
		const keyPressHandler = ({key, code}): void => {
			if(key === ' '){
				setPaused(!paused)
			}else if(key === 'Backspace'){
				setReset(true)
			}else{
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
		if(loggedIn === false && token !== null){
			const hasCreds = checkLogged()
			setToken(hasCreds)
			if(hasCreds){
				setLoggedIn(true)
			}
		}
	}, [ token, loggedIn ])
	const formHandler = ({target: {value, ...t},...e}) => {
		setFormInput(value)
	}
	const blurHandler = () => setFocused(false)
	const focusHandler = () => setFocused(true)

	const clickHandler = () => {
		getCredentials(formInput)
			.then(o => {
				console.log(o)
				if(o instanceof Error){
					setLoggedIn(false)
				}else{
					setLoggedIn(false)
				}
			})
	}

  return (
		<main>
			<Header loggedIn={loggedIn}/>
			<Timer paused={paused} reset={reset} setReset={setReset}/>
			{!loggedIn &&
			<Login
				blurHandler={blurHandler}
				focusHandler={focusHandler}
				formHandler={formHandler}
				formInput={formInput} 
				clickHandler={clickHandler} 
				hidden={hidden} 
			/>}
			<Randomizer/>
		</main>
  )
} 
