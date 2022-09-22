

function Homepage() {
    return (
        <section className='content-container'>
            <div className='search-container'> 
                <h2>Search for your Favorite Pokemon</h2>
                <div className='form-container'>   
                    <input type='text' autoComplete='off' placeholder='i.e - pikachu'/>                
                    <span />      
                </div>
                <button type='button'>Search</button>
            </div>
        </section>
    )
};

export default Homepage;