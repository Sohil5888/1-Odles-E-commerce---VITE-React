import React, { useContext, useEffect, useState } from 'react'

export const ApiUrl = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoadind, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: 'false', msg: '' })
    const [query, setQuery] = useState('Titanic')

    const getMovies = (url) => {
        setIsLoading(true);
        fetch(url).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp.Response === 'True') {
                    setIsLoading(false);
                    setMovie(resp.Search)
                    setIsError({
                        show: false,
                        msg: ""
                    })
                } else {
                    setIsError({
                        show: true,
                        msg: resp.Error
                    })
                }
            })
        })
    }
    // console.log(movie);

    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovies(`${ApiUrl}&s=${query}`);
        }, 800)
        return () => clearTimeout(timeOut);
    }, [query])


    return (
        <>
            <AppContext.Provider value={{isLoadind, movie, isError, query, setQuery}}>{children}</AppContext.Provider>
        </>
    );
}


const globalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, globalContext }
