import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Box, Stack } from "@mui/material";
import TopSection from "../components/TopSection";
import BestPricesSection from "../components/BestPricesSection";
import DiscountsSection from "../components/DiscountsSection";
import { ICardList } from "../interfaces";
import { defaultApi } from "../api";

const HomeView: React.FC = () => {
  const [data, setData] = useState<ICardList>({
    discounts: [],
    bestPrices: [],
    top: [],
  });

  useEffect(() => {
    defaultApi.get("shop/products/").then((res) => setData(res.data));
  }, []);

  return (
    <Box height={"100hv"} width={"100%"}>
      <Box minHeight={64}>
        <Navigation />
      </Box>
      <Stack flexGrow={1} gap={1} p={1} mt={4}>
        <DiscountsSection data={data.discounts} />
        <BestPricesSection data={data.bestPrices} />
        <TopSection data={data.top} />
      </Stack>
    </Box>
  );
};

export default HomeView;
