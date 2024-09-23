import { Box, Typography} from "@mui/material";
import cardsIcon from "./CardsIconMapping";
import Flight from "./dataCards/Flight";

interface RightSectionProps {
  data: any;
}

const RightSection: React.FC<RightSectionProps> = ({ data }) => {  
  if (!data || !data.RightSection) {
    return null; // or you can return a loading spinner or a message
  }

  return (
    <>
    {data.RightSection.filter((item: any) => item.type === 'data').map((item: any, index: number) => (
        <Flight key={index} />
      ))}
          {data.RightSection.filter((item: any) => item.type === 'Icon').map((item: any, index: number) => (
        <Box key={index} className="glass">
          <Box>
            {cardsIcon.get(item.name)}
          </Box>
          <Box>
            <Typography variant="h5" color="white" align="center">
              {item.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default RightSection