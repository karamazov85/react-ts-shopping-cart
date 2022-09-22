import { useContext, createContext, ReactNode } from "react"

interface ShoppingCartProviderProps {
    children: ReactNode;
}

// create the Context with initial value
const ShoppingCartContext = createContext({})

// create the Provider
export const ShoppingCartProvider = ({ children } : ShoppingCartProviderProps) => {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

// expose custom hook
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}