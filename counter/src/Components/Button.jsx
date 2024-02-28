import { useState } from "react"


const Button = () => {

    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count => count + 1)
    }
  return (
    <button className="button" onClick={increment}>count is: {count}</button>
  )
}

export default Button