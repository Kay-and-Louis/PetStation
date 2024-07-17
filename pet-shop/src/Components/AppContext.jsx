import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function AppProvider({children}){
    const [page, setPage] = useState('home');
    const [prices, setPrices] = useState([]);
    const [cartState, setCartState]=useState({});
    
    return(
        <AppContext.Provider value={{page, setPage, prices, setPrices, cartState, setCartState}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext)