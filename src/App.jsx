import './App.css'
import { useState, useEffect } from 'react'
import { CardPokemon } from './components/CardPokemon'
import { useFetch } from './hooks/UseFetch'

function App() {
  const { pokemons } = useFetch( 0, 12)

  return (
    <main>
      <header>
        <h1> List Pokemon</h1>
      </header>

      <section id='container-card'>
        {pokemons.map((pokemons) => {
          return (
            <CardPokemon key={pokemons.url} Name={pokemons.name} Number={pokemons.id} />
          )
        }
        )}
      </section>
    </main>
  )
}

export default App
