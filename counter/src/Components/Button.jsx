import { useState } from "react"


const Button = () => {

    const [count, setcount] = useState(0)
  return (
    <button className="button" onClick={() => setcount((count) => count + 1)}>count is: {count}</button>
  )
}

export default Button