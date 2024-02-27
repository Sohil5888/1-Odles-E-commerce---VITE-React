import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context';
import { useParams, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const SingleProduct = () => {
  const API = 'https://fakestoreapi.com/products'
  const [singleId, setSingleId] = useState('')
  const { id } = useParams()
  // const { services } = useGlobalContext();
  // console.log(services);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id).then((result) => {
      return result.json().then((resp) => {
        console.log(resp);
        setSingleId(resp)
      })
    }).catch((error) => {
      console.log(error);
    })
  }, [id])
  // console.log(singleId);

  // useEffect(() => {

  // }, [])


  return (
    <>
      <Wrapper className='section'>
        {/* <div className='item-section'>
          <div className='item-card'>
            {
              singleId &&
              <>
                <figure>
                  <img key={singleId.image} src={singleId.image} alt="" />
                </figure>
                <div className="card-content">
                  <p className="title">{singleId.Title}</p>
                  <p className="card-text">{singleId.Released}</p>
                  <p className="card-text">{singleId.Genre}</p>
                  <p className="card-text">{singleId.imdbRating}</p>
                  <p className="card-text">{singleId.Country}</p>
                  <NavLink to="/services" className="back-btn">
                    Go Back
                  </NavLink>
                </div>
              </>
            }
          </div>
        </div> */}
        <section className='movie-section'>
          <div className='movie-card'>
            {
              singleId &&
              <>
                <figure>
                  <img key={singleId.image} src={singleId.image} alt="" />
                </figure>
                <div className="card-content">
                  <p className="title" key={singleId.id}>Id : {singleId.id}</p>
                  <p className="title" key={singleId.category}>Category : {singleId.category}</p>
                  <p className="title" key={singleId.description}>Description : {singleId.description}</p>
                  <p className="title" key={singleId.price}>Price : {singleId.price}</p>
                  <p className="title" key={singleId.title}>Title : {singleId.title}</p>


                  {/* <p className='back-btn'><a className='a' href="/services">Go Back</a></p> */}
                  <button className='back-btn'>
                    <NavLink to="/services">
                      Go Back
                    </NavLink>
                  </button>
                </div>
              </>
            }
          </div>
        </section>
      </Wrapper>

    </>
  );
}


const Wrapper = styled.section`

@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&family=Lora:wght@400;500&family=Poppins:wght@400;600&display=swap");

:root {
    --text-clr: #4a5c6c;
    --bg-clr: #f2f4fc;
    --border-clr: rgb(156, 176, 193);
}

.movie-section {
    width: 100%;
    height: 100vh;
    background-color: var(--text-clr);
    display: grid;
    place-items: center;
}

.loading {
    font-size: 3.2rem;
    color: var(--text-clr);
    text-align: center;
}

.movie-section .loading {
    font-size: 3.2rem;
    color: var(--bg-clr);
    text-align: center;
}

.movie-card {
    min-width: 30rem;
    width: 50vw;
    /* padding: 1rem; */
    background-color: var(--bg-clr);
    display: grid;
    gap: 2rem;
    grid-template-columns: 0.6fr 1fr;
    /* align-items: center; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 2rem;
}

figure {
    margin: 0;
    padding: 0;
}

.movie-card img {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    /* border-radius: 0; */
    max-height: 50rem;
    height: auto;
}

.movie-card .title {
    font-size: 1.8rem;
    color: var(--text-clr);
    font-weight: bold;
}

.card-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* gap: 1rem; */
    p{
      margin-top: 0;
      padding-bottom: 10px;
    }
}

.card-text {
    font-size: 1.8rem;
}

button {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    padding: 3.2rem 1rem;
    /* background-color: var(--text-clr); */
    color: var(--text-clr);
    border: 0.2rem solid var(--text-clr);
    font-size: 1.8rem;
    border-radius: 0.5rem;
    transition: all 0.3s linear;
}

button:hover {
    background-color: var(--text-clr);
    color: var(--bg-clr);
}

/* button:hover h2 {
    color: var(--bg-clr);
    transform: translateY(-1.5rem);
    display: inline-block;
}

button:hover img {
    transform: scale(1.1);
} */

.back-btn {
    padding: 1.2rem 3.6rem;
}

/* responsive code   */
@media (max-width: 1200px) {
    .container {
        margin: auto;
        max-width: 110rem;
    }

    .grid-4-col {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 998px) {
    .container {
        max-width: 90rem;
        margin: auto;
    }

    .grid-4-col {
        grid-template-columns: 1fr 1fr;
    }

    input {
        width: 25rem;
    }

    .movie-section {
        height: auto;
        padding: 4.8rem 0;
    }

    .movie-card {
        grid-template-columns: 1fr;
    }

    .card-content {
        padding-left: 2rem;
    }

    .back-btn {
        margin-bottom: 3rem;
    }
}

@media (max-width: 768px) {
    .container {
        max-width: 70rem;
        margin: auto;
    }

    .grid-4-col {
        grid-template-columns: 1fr;
    }
}
`;

export default SingleProduct;