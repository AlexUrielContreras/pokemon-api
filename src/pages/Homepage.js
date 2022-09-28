import { useState } from 'react';

import { fetchPokemon } from '../services/FetchPokemon';
import { PokemonCard } from '../components/PokemonCard';

function Homepage() {
    const [pokeName, setPokeName] = useState('');
    const [pokeData, setPokeData] = useState(null);

    const updateName = (e) => {
        let name = e.target.value;
        setPokeName(name)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const response = await fetchPokemon(pokeName);
        setPokeData(response);  
    }

    return (
        <div className='content-container'>
            <section className='search-container'>
                <div className='idk'>
                    <h2>Search for your Favorite Pokemon</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className='form-container'>
                            <input type='text' autoComplete='off' id='search-pokemon' name='search-pokemon' onBlur={updateName} />
                            <label htmlFor='search-pokemon'></label>
                        </div>
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </section>
            {pokeData && ( 
                <section className='poke-info'>
                    <PokemonCard {...pokeData} />
                </section>
            )}  
            
        </div>
    )
};

export default Homepage;