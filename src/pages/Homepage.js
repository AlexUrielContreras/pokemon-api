import { useState } from 'react'
import { fetchPokemon } from '../services/FetchPokemon';

function Homepage() {
    const [pokeName, setPokeName] = useState('');
    const [pokeData, setPokeData] = useState('')

    const updateName = (e) => {
        let name = e.target.value;
        setPokeName(name)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setPokeName('')

        const response = await fetchPokemon(pokeName);
        setPokeData(JSON.stringify(response.abilities))
    }

    return (
        <section className='search-container'>
            <div className='idk'>
                <h2>Search for your Favorite Pokemon</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-container'>
                        <input type='text' autoComplete='off' id='search-pokemon' name='search-pokemon' value={pokeName} onChange={updateName}/>
                        <label htmlFor='search-pokemon'></label>
                    </div>
                    <button type='submit'>Search</button>
                </form>
            </div>
            {pokeData}
        </section>
    )
};

export default Homepage;