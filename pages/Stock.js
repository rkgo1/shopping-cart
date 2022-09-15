import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { products } from '../utils/data'
import { useDispatch } from 'react-redux';
import { addToCart } from './reducer/cartslice';
import { useContext } from 'react';

const Stock = () => {
    const dispatch = useDispatch();
    return (
        <Box display={''} paddingTop={5} sx={{ background: '#Fff' }}>
            {products.map(product => (
                <Box display={'flex'} key={product.id} height={100} >
                    <Box component={'img'} width={50} height={50} src={product.image} alt={product.name} />
                    <Box paddingLeft={5}>
                        <Typography variant='body1'>{product.name}</Typography>
                        <Typography variant='h5' color={'#111'}>R {product.price}</Typography>
                        <Button
                            onClick={() => dispatch(addToCart(product))}>
                            Add To Cart
                        </Button>

                    </Box>

                    <Divider />

                </Box>
            ))}
        </Box>
    )
}

export default Stock