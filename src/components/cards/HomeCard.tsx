import { Box } from '@mui/material'
import HomeCardNav from './HomeCardNav';
import CardsCollection from './CardsCollection';
import CircularCardsCollection from './CircularCardsCollection';

const HomeCard = () => {

  return (
    <Box>
    <HomeCardNav />
    <CardsCollection />
    {/* <CircularCardsCollection /> */}
    </Box>
  )
}

export default HomeCard