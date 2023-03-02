import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  // change theme
  const [lightTheme, setLightTheme] = useState(true)
  const changeTheme = () => {
    setLightTheme(!lightTheme)
  }

  // restore scroll
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div
      className={`flex flex-col min-h-screen  transition-all duration-300 ${
        lightTheme ? '' : 'dark'
      }`}>
      <div className='text-slate-900 dark:text-slate-100 '>
        <div className='flex-grow flex-shrink-0 basis-auto'>
          <Navbar changeTheme={changeTheme} lightTheme={lightTheme} />
          <main className='pt-8 '>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
