import { useState } from 'react'
import Navbar from './utility/Navbar/Navbar'
import Home from './components/home/Home'
import Navbar from './utility/navbar/Navbar'
import MockInterviews from './components/initiatives/mockinterviews/MockInterviews'
import './App.css'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Navbar />
    <MockInterviews />
    </>  )
}

export default App
