import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setcount] = useState(0)

  return (
    <>
      <Button count={count} setcount={setcount} text="hello from parent" />
    </>
  )
}

export default App
