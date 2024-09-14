import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const RoomService = () => {
    const [count, setCount] = useState(0);

  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh'}}>
        <Box sx={{ backgroundColor: '#c9c9c9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" align='left'>
                Room Number - 1234
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ marginRight: '5px' }}>
                12:30 PM
                </Typography>
                <AccessAlarmIcon sx={{ fontSize: '25px', color: 'black' }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NotificationsIcon sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }} />
                <Typography variant="h5">2 Notifications</Typography>
            </Box>
        </Box>
        <Grid container display={'flex'} marginTop={1}>
            <Grid item xs={6} sm={1} paddingRight={0.5}>
                <Box sx={{ height: "90vh", display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#c9c9c9', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px'}}>
                        <img src="/staticImages/chef.png" alt="Chef" style={{ maxHeight: '50%', maxWidth: '50%', paddingTop: '30px' }} />
                        <Typography align='center' fontSize='14px' padding='2px' fontWeight='bold'>Chef Special</Typography>
                        <img src="/staticImages/soup.png" alt="Chef" style={{ maxHeight: '50%', maxWidth: '50%', paddingTop: '30px' }} />
                        <Typography align='center' fontSize='14px' padding='2px' fontWeight='bold'>Soups & Appetizers</Typography>
                        <img src="/staticImages/food.png" alt="Chef" style={{ maxHeight: '50%', maxWidth: '50%', paddingTop: '30px'  }} />
                        <Typography align='center' fontSize='14px' padding='2px' fontWeight='bold'>Main Course</Typography>
                        <img src="/staticImages/cake.png" alt="Chef" style={{ maxHeight: '50%', maxWidth: '50%', paddingTop: '30px'  }} />
                        <Typography align='center' fontSize='14px' padding='2px' fontWeight='bold'>Desserts</Typography>
                        <img src="/staticImages/toast.png" alt="Chef" style={{ maxHeight: '50%', maxWidth: '50%', paddingTop: '30px'  }} />
                        <Typography align='center' fontSize='14px' padding='2px' fontWeight='bold'>Drinks</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={7} paddingRight={1.5}>
                <Box sx={{display: 'flex', flexWrap: 'wrap', flexGrow: 1 , height: "90vh", backgroundColor: '#c9c9c9', borderTopRightRadius: '16px', borderBottomRightRadius: '16px'}}>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food1.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food2.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food3.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food4.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food5.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ width: '30%', margin: '10px' }}>
                        <Card sx={{ backgroundColor: '#c9c9c9' }}>
                        <CardMedia component="img" height="125" image='/staticImages/food6.jpg' />
                        <CardContent>
                            <Typography fontSize="18px" fontWeight="bold" component="div">
                            Sayadieh
                            </Typography>
                            <Typography fontSize="12px"  component="div">
                            salmon, rice, fried onions, nuts, and tahini sauce
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography fontSize="18px" fontWeight="bold" paddingTop='10px' component="div">
                                $20
                                </Typography>
                                </Box>

                                <Box sx={{ paddingTop: '10px', display: 'flex', alignItems: 'center'  }}>
                                <RemoveCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                />
                                <Typography sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}>
                                    {count}
                                </Typography>
                                <AddCircleIcon
                                    sx={{ fontSize: '25px', color: 'black', marginRight: '5px' }}
                                    onClick={() => setCount(count + 1)}
                                />
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </Box>
                    
                </Box>
            </Grid>
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


                </Box>
            </Grid>
            
        </Grid>
        
    </Box>
  )
}

export default RoomService