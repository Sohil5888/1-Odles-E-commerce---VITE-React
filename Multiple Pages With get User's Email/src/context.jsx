import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';

export const API = 'https://fakestoreapi.com/products'
const AppContext = createContext()

const initialvalue = {
    name: '',
    image: '',
    services: []
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialvalue)

    const updateHomePage = () => {
        return dispatch({
            type: 'HOME_UPDATE',
            payload: {
                name: 'Sapariya Sohil',
                image: './assets/images/hero.svg'
            }
        })
    }


    const updateAboutPage = () => {
        return dispatch({
            type: 'ABOUT_UPDATE',
            payload: {
                name: 'Sohil Sapariya',
                image: './assets/images/about1.svg'
            }
        })
    }


    const getApi = (url) => {
        fetch(url).then((result) => {
            return result.json().then((resp) => {
                // console.log(resp);
                dispatch({type: 'GET_SERVICES', payload:resp})
            })
        }).catch((error) => {
            console.log(error.msg);
        })
    }

    useEffect(() => {
        getApi(API);
    }, [])


    return (
        <>
            <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }