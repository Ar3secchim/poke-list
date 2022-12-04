import { useState, useEffect } from "react"
import axios from "axios"

export function useFetch({offset, limit}) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => response)
      .then((data) => setPokemons(data.results))
  }, [])

  return { pokemons }
}