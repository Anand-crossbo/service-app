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
    const sortedSections = data.RightSection.sort((a: any, b: any) => a.priority - b.priority);

  return (
    <>
      {sortedSections.map((item: any, index: number) => {
        if (item.type === 'data') {
          return <Flight key={index} />;
        } else if (item.type === 'Icon') {
          return (
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
          );
        }
        return null;
      })}
    </>
  )
}

export default RightSection