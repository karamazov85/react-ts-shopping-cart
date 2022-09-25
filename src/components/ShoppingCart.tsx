import { Offcanvas, OffcanvasHeader, OffcanvasBody, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from '../data/items.json'

interface ShoppingCartProps {
    isOpen: boolean;
}

export const ShoppingCart:React.FC<ShoppingCartProps> = ({ isOpen }) => {
    const { closeCart, cartQuantity, cartItems } = useShoppingCart()
    
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Shopping Cart 
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={2}>
                    {cartItems.map(item => 
                        <CartItem key={item.id} { ...item } />
                    )}
                </Stack>
                <div className="ms-auto fw-bold fs-5">
                    Total: 
                    {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    },0))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}