import React from 'react'
import Movies from './Movies';
import Search from './Search';

const Home = () => {
    return ( 
        <>
            <section>
                <div className="container">
                    {/* <h1 className='text-center text-2xl pt-11'>Home Page</h1> */}
                    <Search />
                    <Movies />
                </div>
            </section>
        </>
     );
}
 
export default Home;