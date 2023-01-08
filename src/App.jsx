import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-800 text-slate-400 flex flex-col justify-center items-center space-y-10'>
      <div className='w-10 aspect-square'>
        <img src={reactLogo} alt='React Logo SPEEN' className='animate-spin' />
      </div>
      <h1 className='text-3xl font-bold underline'>
        Lets count! the count is <span className='text-5xl'>{count}</span>
      </h1>
      <button className='px-4 py-2 border' onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  )
}

export default App
