import React from "react";
import Navigation from "../components/Navigation";
import { Box, Stack } from "@mui/material";
import CategorySection from "../components/CategorySection";
import ProductsListSection from "../components/ProductsListSection";

const ShopView = () => {
  return (
    <Box height={"100hv"} width={"100%"}>
      <Box minHeight={64}>
        <Navigation />
      </Box>
      <Stack flexGrow={1} gap={1} p={1} mt={4} direction={"row"}>
        <Box
          position="sticky"
          top={72}
          alignSelf="flex-start"
          p={3}
          boxSizing={'border-box'}
        >
          <CategorySection />
        </Box>
        <ProductsListSection />
      </Stack>
    </Box>
  );
};

export default ShopView;
