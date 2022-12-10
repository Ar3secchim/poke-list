import './App.css'
import { useState, useEffec } from 'react'
import { useFetch } from './hooks/UseFetch'

import { CardPokemon } from './components/CardPokemon'
import { Pagination } from './components/Pagination'

//add className for CardPokemon for use in background color
function typesPokemons(typesPokemons) {

  for (var i = 0; typesPokemons.length > i; i++) {
    typesPokemons = {
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
  let { pokemon, loading, pages,
    currentPokemons, setCurrentPage } = useFetch()

  return (
    <main>
      <header>
        <h1> List Pokemon</h1>
        {/* <select >
          <option value={0}>First Generation</option>
          <option value={152}>Second Generation</option>
          <option value={252}>Third Generation</option>
          <option value={387}>Fourth Generation</option>
          <option value={494}>Fifth Generation</option>
          <option value={650}>Sixth Generation</option>
          <option value={722}>Seventh Generation</option>
          <option value={810}>Eighth Generation</option>
        </select> */}
      </header>

      <section>
        <ol id='container-card'>
          {loading && <div>Carregando...</div>}
          {currentPokemons.map((pokemon) => {
            return (
              <CardPokemon id= "card"
                key={pokemon.order}
                TypeColor={typesPokemons(pokemon.types)}
                Name={pokemon.name}
                Number={pokemon.id}
                Stage={pokemon.base_experience}
                Life={pokemon.base_experience}
                Type={typesPokemonsList(pokemon.types)}
                SrcImage={pokemon.sprites.other.dream_world.front_default}
                Weight={pokemon.weight}
                Height={pokemon.height}
              />
            )
          })}
        </ol>
      </section>

        <Pagination id='container-card'
          Pages={pages}
          setCurrentPage={setCurrentPage}
        />


      <footer></footer>
    </main >
  )
}

export default App
