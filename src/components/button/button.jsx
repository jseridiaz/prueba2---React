import React from 'react'

const Button = ({ text, number, funcion }) => {
  console.log(number)
  return (
    <button
      className={
        (number == 42 && text == 'Mas') || (number - 1 == 0 && text == 'Menos')
          ? 'none'
          : ''
      }
      onClick={() => {
        funcion(text)
      }}
    >
      {text}
    </button>
  )
}

export default Button
