import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../css/Home.css'
const Home = () => {
  const [isHovered,setIsHovered] = useState(false)
  const navigate = useNavigate()


  return (
    <div id='Home' className={`flex justify-center items-center h-screen text-2xl${isHovered ? ' bg-visible' : ''}`}>
      <div className='text-center'>
      <h1 className='text-4xl font-bold store-blue'>Welcome to BudgetMo <span className='text-gray-100'>, wala ng budget</span></h1>
      <div className='text-sm text-gray-500'>
        <p className='text-gray-500 py-2'>
            BudgetMo is a simple and easy to use budget tracker that helps you <span className="line-through text-gray-400">manage</span> <strong>gastos</strong> your money.
        </p> 
      </div>
      <div className='relative flex gap-4 mt-4 items-center justify-center'>
        <button
          className='bg-black text-white border-1 border-black px-4 py-2 rounded-md font-bold hover:bg-transparent hover:text-white hover:border-white hover:border-1 transition'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
        </button>
        <button onClick={() => navigate('/login')} className='bg-white text-black border-1 border-black hover:bg-black hover:text-white px-4 py-2 rounded-md transition'>Login</button>
        
        {isHovered &&(
        <p className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-200 text-black px-3 py-1 rounded shadow-lg animate-bounce z-10">
          Panggap!
        </p>
        )}
      </div>
      </div>
       
    </div>
  )
}

export default Home