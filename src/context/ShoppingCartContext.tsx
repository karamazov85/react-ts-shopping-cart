import { useContext, createContext, ReactNode, useState } from "react"


interface CartItem {
    id: number;
    quantity: number;
}

interface ShoppingCartContext {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}
interface ShoppingCartProviderProps {
    children: ReactNode;
}

// create the Context with initial value
const ShoppingCartContext = createContext({} as ShoppingCartContext); 

// create the Provider
export const ShoppingCartProvider = ({ children } : ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return (cartItems.find(item => item.id === id)?.quantity || 0);
    }
    function increaseItemQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [ ...currentItems, { id: id, quantity: 1 }]
            } else {
                return currentItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1} : item)
            }    
        })
    }
    function decreaseItemQuantity(id: number) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id) 
        })
    }
    
    

    
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseItemQuantity,decreaseItemQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

// expose custom hook
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}