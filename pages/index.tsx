import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Timer from '../components/timer/timer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
		<main style={{ fontSize: '20vmin', textAlign: 'center'}}>
		<Timer/>
		</main>
  )
}

export default Home
