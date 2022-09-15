import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { products } from '../utils/data'
import { Box } from '@mui/system'
import { Button, Divider, Typography } from '@mui/material'
import Navbar from './comps/Navbar'
import Stock from './Stock'
export default function Home() {
  return (
    <Box>

      <Navbar />
      <Stock />

    </Box>
  )
}
