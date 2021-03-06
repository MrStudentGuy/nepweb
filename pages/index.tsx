import { initializeApp } from 'firebase/app'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import { auth, firebaseConfig } from '../firebase'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'
import Login from './login'

const Home: NextPage = () => {

  if(auth.currentUser) {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
  
        <Login />
        <Toaster />
      </div>
    )  
  } else {
    return(
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Dashboard />
        <Toaster />
      </div>
      
    )
  }

  
}

export default Home
