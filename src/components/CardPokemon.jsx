import "./CardPokemon.css"
import { Pentagon } from "./pentagon"

export function CardPokemon({ Stage, Number, Name}) {
  return (
    <>
      <div id='card'>
        <div className="card-evolution">
          <div className="card-stage">
            <Pentagon Color="white" Number={Number} />
            <span className="stage">{Stage}</span>
          </div>
        </div>

        <h2>{Name}</h2>

        <div>
          <img src="" />
          <div>
            <span>Nª</span>
            <span>Altura</span>
            <span>Peso</span>
          </div>
        </div>

      </div>
    </>
  )
}