import { useState } from 'react'

const Character = ({ character, rotation }) => {
  const [style, setStyle] = useState(false)
  return (
    <div>
      <h2>{character.name}</h2>
      <img
        className={style}
        src={character.image}
        alt={character.name}
        onClick={(e) => setStyle(rotation(e))}
      />
      <p>{character.species}</p>
    </div>
  )
}

export default Character
