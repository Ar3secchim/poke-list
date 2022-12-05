import { useState, useEffect } from "react"
import axios from "axios"


export function useFetch() {
  const [pokemon, setPokemons] = useState([])
  const [loading, setIsLoading] = useState(true)

  const offset= 0
  const limit = 12

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => response.data)
      .then((data) => data.results)
      .then((pokemons) => pokemons.map((pokemons) => fetch(pokemons.url).then((response) => response.json())))
      .then((detailsRequests) => Promise.all(detailsRequests))
      .then((pokemonsDetails) => setPokemons(pokemonsDetails))
      .finally(()=> setIsLoading(false))
  }, [])
  return { pokemon, loading }
}