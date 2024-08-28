import { Box, Divider, Stack, Typography } from "@mui/material";
import ClothCard from "./Card";
import { CardDT } from "../interfaces";

const TopSection = ({ data }: { data: CardDT[] }) => {
  return (
    <Box>
      <Stack p={1} spacing={4}>
        <Divider>
          <Typography variant="h5" textTransform={"uppercase"}>
            Top Clothes
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

export default TopSection;
