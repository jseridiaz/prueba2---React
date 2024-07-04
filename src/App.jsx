import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from './components/button/button'
import InputValue from './components/InputValue/InputValue'
import Character from './components/Character/Character'

function App() {
  const [value, setValue] = useState(1)
  const [characters, setCharacters] = useState([])

  const morOless = (text) => {
    text == 'Menos' ? setValue(value - 1) : setValue(value + 1)
  }

  useEffect(() => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/?page=${value}`)
        .then((res) => res.json())
        .then((res) => setCharacters(res.results))
    } catch (error) {
      console.log(error)
    }
  }, [value])

  return (
    <>
      <section id='character-cards'>
        {console.log(characters)}
        {characters.map((res) => (
          <Character character={res} />
        ))}
      </section>
      <div className='gap-m'>
        <Button text='Menos' number={value} funcion={morOless} />
        <InputValue value={value} />
        <Button text='Mas' number={value} funcion={morOless} />
      </div>
    </>
  )
}

export default App
