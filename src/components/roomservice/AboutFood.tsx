import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AboutFood = ({ onBack }: { onBack: () => void }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <Grid item xs={6} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column',overflowY: 'auto', alignItems: 'center', height:isMobile ? '100vh' : '90vh', backgroundColor: '#c9c9c9', borderTopLeftRadius:isMobile ? '0':  '16px', borderBottomLeftRadius:isMobile ? '0':  '16px' }}>
          <Box sx={{ display: 'flex', justifyContent:'flex-end', width: '100%' }}>
            <HighlightOffIcon sx={{ fontSize: '24px',padding:'10px' }} onClick={onBack} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <img src="/staticImages/food1.jpg" alt="food" style={{width:'350px', height: '150px', borderRadius: '16px', objectFit: 'cover', padding:'10px 10px 0 10px' }} />
          </Box>
        <Typography fontSize='16px' color='black' fontWeight='bold' padding='10px'>
          Chef's Signature Sayadieh: A Symphony Of Flavors
        </Typography>
        <Typography fontSize='12px' color='black' padding='0px 10px 0 10px'>
            {showFullText ? (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
              </>
            ) : (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 'Content here, content here', making it look like readable English...
              </>
            )}
          </Typography>
          <Typography fontSize='14px' color='blue' onClick={handleToggleText} sx={{ alignSelf: 'flex-start', paddingLeft: '10px' }}>
            {showFullText ? 'Show Less' : 'Read More'}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', paddingTop: '10px' }}>
            <img src="/staticImages/food1.jpg" alt="small1" style={{ width: '110px', height: '100px', borderRadius: '8px' }} />
            <img src="/staticImages/food2.jpg" alt="small2" style={{width: '110px', height: '100px', borderRadius: '8px' }} />
            <img src="/staticImages/food3.jpg" alt="small3" style={{ width: '110px', height: '100px', borderRadius: '8px' }} />
          </Box>
          <Typography fontSize='16px' color='black' fontWeight='bold' padding='0 10px 0 10px' sx={{ alignSelf: 'flex-start' }}>Guest Reviews</Typography>
          <Typography fontSize='16px' color='black' padding='0 10px 10px 10px' sx={{ alignSelf: 'flex-start' }}>4.8 ★★★★★ 167 Reviews</Typography>
          <Box sx={{ width: '100%', borderBottom: '1px solid #000' }}></Box>
          <Typography fontSize='14px' color='black' padding='10px 10px 10px 10px' sx={{ alignSelf: 'flex-start' }}>★★★★★ 20 days ago</Typography>
          <Typography fontSize='14px' color='black' padding='0 10px 10px 10px'>
          Authentic flavors, great service, and a beautiful view. The Sayadieh was a hit with my family.
        </Typography>
      </Box>
    </Grid>
  )
}

export default AboutFood