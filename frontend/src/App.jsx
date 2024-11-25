import React from 'react'
import './App.css'
import Charts from './components/charts';
const App = () => {
  console.log("123");

  return (
    <div className='flex flex-col items-center justify-center m-5 '>
      <p className='text-white bg-green-500 font-bold text-center text-4xl p-4 rounded-lg hover:text-green-500 hover:bg-white cursor-pointer w-[60%] '>Hello World</p>
      <Charts />

    </div>
  )
}

export default App;