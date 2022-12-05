import './App.css'
import { useState, useEffect } from 'react'
import { CardPokemon } from './components/CardPokemon'
import { useFetch } from './hooks/UseFetch'

//add className for CardPokemon for use in background color
function typesPokemons(typesPokemons) {

  for (var i = 0; typesPokemons.length > i; i++) {
    typesPokemons= {
      name: typesPokemons[i].type.name,
    }
  }
  return typesPokemons.name
}

//search types for pokemon
function typesPokemonsList(typesPokemons) {

  return (
  typesPokemons.map((typeSlot) => <span id="type-list" className={typeSlot.type.name} >{typeSlot.type.name} </span>)
  )
}


function App() {
  const { pokemon, loading } = useFetch()

  return (
    <main>
      <header>
        <h1> List Pokemon</h1>
      </header>

      <section id='container-card'>
        {loading && <div>Carregando...</div>}

        {pokemon.map((pokemon) => {
          return (
            <CardPokemon key={pokemon.order}
              TypeColor={typesPokemons(pokemon.types)}
              Name={pokemon.name}
              Number={pokemon.order}
              Stage={pokemon.base_experience}
              Life={pokemon.base_experience}
              Type={typesPokemonsList(pokemon.types)}
              SrcImage={pokemon.sprites.other.dream_world.front_default}
              Weight={pokemon.weight}
              Height={pokemon.height}
            />
          )
        }
        )}
      </section>

      <button id="loadMore" type='button'>
          Load More...
      </button>
    </main>
  )
}

export default App
