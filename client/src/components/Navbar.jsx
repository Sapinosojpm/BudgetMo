import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false) 
  return (

    <div className='bg-black text-white'>
      <div className='py-2'>
        <div className='flex justify-between mx-auto px-4'>
          <div>
            <span className='text-2xl font-bold'>BudgetMo</span>
          </div>
          <div className='flex gap-4 items-center md:flex hidden'>
            <a href="/">Home</a>
            <a href="/ipon">Ipon</a>
            <a href="/gastos">Gastos</a>
            <a href="/login">Login</a>
          </div>
          <div className='md:hidden invert'><img src={assets.menu} alt="" onClick={() => setIsOpen(!isOpen)} className='w-6 h-6' />
          
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Navbar