import { useContext, createContext, ReactNode, useState } from "react"
import { ShoppingCart } from '../components/ShoppingCart'

interface CartItem {
    id: number;
    quantity: number;
}

interface ShoppingCartContext {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartItems: CartItem[]; 
    cartQuantity: number;
    openCart: () => void;
    closeCart: () => void;
}
interface ShoppingCartProviderProps {
    children: ReactNode;
}

// create the Context with initial value
const ShoppingCartContext = createContext({} as ShoppingCartContext); 

// create the Provider
export const ShoppingCartProvider = ({ children } : ShoppingCartProviderProps) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])
    const cartQuantity = cartItems.reduce((acc, curr) => {
        return acc + curr.quantity
    },0)

    function openCart() {
        setIsOpen(true);
    }
    function closeCart() {
        setIsOpen(false);
    }
    function getItemQuantity(id: number) {
        if(!id) {
            return 0;
        }
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
        <ShoppingCartContext.Provider value={{cartItems,cartQuantity,getItemQuantity,increaseItemQuantity,decreaseItemQuantity, removeFromCart, openCart, closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}

// expose custom hook
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}