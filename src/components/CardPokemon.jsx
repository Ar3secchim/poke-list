import "./CardPokemon.css"
import { Pentagon } from "./pentagon"

export function CardPokemon({  TypeColor, Number, Life, Name, Type, SrcImage, Height, Weight }) {

  return (
    <>
      <li id="card" className={TypeColor}>
        <div className="card-evolution">
          <div className="card-stage">
              <Pentagon Color="white" Number={Number} />
              <div className="stage-details">
                <span className="stage">{Life} HP</span>
                {/* <span className="stage ">{Stage}</span> */}
              </div>

          </div>
        </div>


        <div className="card-details">
          <div>
            <h2>{Name}</h2>
            <span>{Type}</span>
            <div className="details">
              <span>{Height}'</span>
              <span>{Weight} lb</span>
            </div>
          </div>
          <img className="img" src={SrcImage} />
        </div>

      </li>
    </>
  )
}