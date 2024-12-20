import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MiddleDiv from './components/MiddleDiv/MiddleDiv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <MiddleDiv />
    </>
  )
}

export default App
