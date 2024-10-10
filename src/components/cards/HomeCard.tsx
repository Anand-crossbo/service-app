import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import HomeCardNav from './HomeCardNav';
import CardsCollection from './CardsCollection';

const HomeCard = () => {

  return (
    <Box>
    <HomeCardNav />
    <CardsCollection />
    </Box>
  )
}

export default HomeCard