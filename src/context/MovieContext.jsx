import {createContext, useContext, useState} from "react";


const MovieContext = createContext();

export const MovieContextProvider =({children})=>{
    const [cartData, setCartData] = useState([]);
    return (
        <MovieContext.Provider value={{cartData, setCartData}}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovie  = ()=> useContext(MovieContext);
