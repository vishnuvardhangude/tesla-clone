import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Section from './components/Section';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {/* <Header /> */}
        <Home />
      </div>
    </>
  )
}

export default App
