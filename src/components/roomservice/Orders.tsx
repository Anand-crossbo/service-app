import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Orders = () => {
  return (
    <Grid item xs={6} sm={4}>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center',  height: "90vh", backgroundColor: '#c9c9c9', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px'}}>
        <Box sx={{display: 'flex', paddingTop: '20px' }}>
            <Box sx={{ backgroundColor: 'black', width:'120px',borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                <Typography variant="h6" color='white' align='center' padding='10px'>Cart</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'white',width:'120px',borderTopRightRadius: '16px', borderBottomRightRadius: '16px', border: '2px solid #000'}}>
                <Typography variant="h6" color='black' align='center' padding='10px'>Orders</Typography>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent:'space-between', width: '100%', paddingTop:"20px"}}>
            <Typography fontSize='14px' color='black' align='left' padding='10px 40px'>Sayadieh</Typography>
            <Typography fontSize='14px' color='black' align='right' padding='10px 40px'>x1 &nbsp; &nbsp; &nbsp; $20</Typography>
        </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '20px'}}>
                <Typography fontSize='14px' color='black' align='left' fontWeight='bold' padding='10px 40px'>
                    Total
                </Typography>
                <Typography fontSize='14px' color='black' align='right' fontWeight='bold' padding='10px 40px'>
                    $20
                </Typography>
            </Box>
            <Box sx={{ display: 'flex',bottom: 30, justifyContent: 'content', position: 'fixed', alignItems: 'center'}}>
                <Button sx={{ borderRadius: '10px', width: '100%', margin: '10px', padding: '8px 40px' ,fontSize:'12px', fontWeight: 'bold', border: '2px solid #000', color: 'black', backgroundColor: 'white' }}>Confirm</Button>
            </Box>
    </Box>
</Grid>
  )
}

export default Orders