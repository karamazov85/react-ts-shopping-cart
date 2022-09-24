import { Offcanvas, OffcanvasHeader, OffcanvasBody, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

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
                <Stack>
                    {cartItems.map(item => 
                        <CartItem key={item.id} { ...item } />
                    )}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}