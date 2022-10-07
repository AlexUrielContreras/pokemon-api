import AbilityList from "./AbilityList";
import StatList from "./StatList";

function PokemonCard(props) {
  const { name, stats, abilities, base_experience, height, weight, sprites } = props;

  console.log(props)

  // grabs the pokemon sprite link
  const pokeImageLinkFront = sprites.front_default;
  const pokeImageLinkBack = sprites.back_default;
  

  return (
    <>
      <div className="poke-greeting">
        <img src={pokeImageLinkFront} />
        <h2>{name.toUpperCase()}</h2>
      </div>
      <div className="poke-list-items">
        <div className="poke-abilities">
          <h3>Abilities</h3>
          <AbilityList {...abilities} />
        </div>

        <div className="poke-abilities">
          <h3>Stats</h3>
          <StatList {...stats} />
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
