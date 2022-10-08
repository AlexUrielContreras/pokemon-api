import AbilityList from "./AbilityList";
import StatList from "./StatList";

function PokemonCard( props ) {
  const { name, stats, abilities, sprites } = props;
  
  // grabs the pokemon sprite link
  const pokeImageLinkFront = sprites.front_default;

  return (
    <>
      <div className="poke-greeting">
        <div className='caro'>
          <img src={pokeImageLinkFront} alt='pokemon sprite'/>
        </div>
        <h2>{name.toUpperCase()}</h2>
      </div>
      <div className="poke-list-items">

        <div className="poke-abilities">
          <h3>Stats</h3>
          <StatList {...stats} />
        </div>

        <div className="poke-abilities">
          <h3>Abilities</h3>
          <AbilityList {...abilities} />
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
