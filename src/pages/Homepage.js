

function Homepage() {
    return (
        <section className='content-container'>
            <div className='search-container'> 
                <h2>Search for your Favorite Pokemon</h2>
                <div className='form-container'>
                    <input type='text' placeholder='i.e - pikachu'/>
                    <button type='button'>Search</button>
                </div>
            </div>
        </section>
    )
};

export default Homepage;