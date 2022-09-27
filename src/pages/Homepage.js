

function Homepage() {
    return (
        <section className='search-container'>
            <div className='idk'> 
                <h2>Search for your Favorite Pokemon</h2>
                <div className='form-container'>   
                    <input type='text' autoComplete='off'/>                
                    <label></label>      
                </div>
                <button type='button'>Search</button>
            </div>
        </section>
    )
};

export default Homepage;