const Button = ({ count, setcount, text }) => {
  return (
    <button onClick={() => setcount(count + 1)}>
      {text} {count}
    </button>
  )
}

export default Button;
