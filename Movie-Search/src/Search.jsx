import React from 'react'
import { globalContext } from './context';

const Search = () => {
    const { query, setQuery, isError } = globalContext()
    return ( 
        <>
            <section className='search-section'>
                <div className="container">
                    <h2 className='text-7xl mb-16'>Search Movie</h2>
                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input className='px-8 text-3xl' type="search" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                    </form>
                    <div className='card-error'>
                        <p>{isError.show && isError.msg}</p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Search;