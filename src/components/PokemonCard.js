import AbilityList from './AbilityList';

function PokemonCard(props) {
  const { 
    name,
    stats,
    abilities,
    base_experience,
    height,
    weight,
    sprites
  } = props;

  // grabs the pokemon sprite link 
  const pokeImageLink = sprites.front_default;
  
  return ( 
    <>
      <div className='poke-greeting'>
          <img src={pokeImageLink} />
          <h2>{name.toUpperCase()}</h2>
      </div> 
      <div className='poke-list-items'>

        <div className='poke-abilities'>
          <h3>Stats</h3>
          
        </div>

        <div className='poke-abilities'>
          <h3>Abilities</h3>
          <AbilityList {...abilities} />
        </div>
        
      </div> 
    </>     
  )
};

export default PokemonCard;