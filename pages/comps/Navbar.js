import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {

    // Selecting cart from global state
    const cart = useSelector((state) => state.cart);

    // Getting the count of items
    const getItemsCount = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

    return (
        <Box display={'flex'} flexGrow={1} sx={{ background: '#CACACA' }} height={20}>
            <Typography>KatKart</Typography>
            <Box paddingLeft={5} display={'flex'} flexGrow={1} >
                <Box >
                    <Link href="/">Home</Link>
                </Box>
                <Box paddingLeft={5} flexGrow={1}>
                    <Link href="/">Shop</Link>
                </Box>
                <Box paddingLeft={5}>
                    <Link href="/cartpage">
                        <Typography>Cart ({getItemsCount()})</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;