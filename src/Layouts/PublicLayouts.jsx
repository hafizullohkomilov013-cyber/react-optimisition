import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PublicLayouts() {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <header> 
            <Navbar/>    
        </header> 
        <main className='grow'>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default PublicLayouts
