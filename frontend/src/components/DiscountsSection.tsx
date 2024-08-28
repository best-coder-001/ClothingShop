import { Box, Stack, Divider, Typography } from "@mui/material";
import { CardDT } from "../interfaces";
import ClothCard from "./Card";

const DiscountsSection = ({ data }: { data: CardDT[] }) => {

  return (
    <Box>
      <Stack p={1} spacing={4}>
        <Divider>
          <Typography variant="h5" textTransform={"uppercase"}>
            Todays Discounts
          </Typography>
        </Divider>
        <Stack
          direction="row"
          justifyContent={"space-around"}
          spacing={1}
          flexWrap={"wrap"}
        >
          {data.map((value: CardDT, index) => (
            <ClothCard key={index} {...value} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscountsSection;
