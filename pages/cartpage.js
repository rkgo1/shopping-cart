import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../comps/Navbar';

import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from './reducer/cartslice';

const CartPage = () => {

    // Extracting cart state from redux store 
    const cart = useSelector((state) => state.cart);


    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    };

    return (
        <div >
            <Navbar />
            {cart.length === 0 ? (
                <h1>Your Cart is Empty!</h1>
            ) : (
                <Box sx={{ background: "#404045" }}>
                    <Box display={'flex'} flexGrow={1}>
                        <Box paddingLeft={6}>Image</Box>
                        <Box paddingLeft={6}>Product</Box>
                        <Box paddingLeft={20}>Price</Box>
                        <Box paddingLeft={6}>Quantity</Box>
                        <Box paddingLeft={6}>Actions</Box>
                        <Box paddingLeft={12}>Total Price</Box>
                    </Box>
                    {cart.map((item) => (
                        <Box key={cart.id} display={'flex'}>
                            <Box paddingLeft={6}>
                                <Box component={'img'}
                                    src={item.image}
                                    height={50}
                                    width={50} />
                            </Box>

                            <Box paddingLeft={6}><Typography>{item.name}</Typography></Box>
                            <Box paddingLeft={6}> <Typography>R {item.price}</Typography></Box>
                            <Box paddingLeft={6}>  <Typography>{item.quantity}</Typography></Box>
                            <Box paddingLeft={6}>


                                <Button onClick={() => dispatch(incrementQuantity(item.id))}>
                                    +
                                </Button>
                                <Button onClick={() => dispatch(decrementQuantity(item.id))}>
                                    -
                                </Button>
                                <Button onClick={() => dispatch(removeFromCart(item.id))}>
                                    x
                                </Button>

                            </Box>
                            <Typography>R {item.quantity * item.price}</Typography>
                        </Box>
                    ))}
                    <Typography>Grand Total: R {getTotalPrice()}</Typography>
                </Box>
            )}
        </div>
    );
};

export default CartPage;

