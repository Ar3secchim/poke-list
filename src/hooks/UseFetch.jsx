import { useState, useEffect } from "react"
import axios from "axios"


export function useFetch() {
  const [pokemon, setPokemons] = useState([])
  const [loading, setIsLoading] = useState(true)


  const [itensPerPages, setItensPerPages] = useState(9)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(pokemon.length / itensPerPages)

  const startIndex = currentPage * itensPerPages
  const endIndex = startIndex + itensPerPages
  const currentPokemons = pokemon.slice(startIndex, endIndex)

  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(151)
  const starOffset = offset - setOffset
  const endLimit = limit

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${starOffset}&limit=${endLimit}`)
      .then((response) => response.data)
      .then((data) => data.results)
      .then((pokemons) => pokemons.map((pokemons) => fetch(pokemons.url).then((response) => response.json())))
      .then((detailsRequests) => Promise.all(detailsRequests))
      .then((pokemonsDetails) => setPokemons(pokemonsDetails))
      .finally(() => setIsLoading(false))
  }, [])


  return {
    pokemon, loading, pages,
    currentPokemons, setCurrentPage,
    starOffset
  }
}
