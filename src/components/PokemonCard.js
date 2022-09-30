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
      <div className='poke-stats'>
          <img src={pokeImageLink} />
          <h2>{name.toUpperCase()}</h2>
      </div> 
      <div className='poke-list-items'>
        <AbilityList {...abilities} />
      </div> 
    </>     
  )
};

export default PokemonCard;