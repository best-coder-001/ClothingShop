import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { defaultApi } from "../api";
import { RootState } from "../store";
import { CardDT } from "../interfaces";
import ClothCard from "./Card";

const ProductsListSection = () => {
  const [data, setData] = useState<CardDT[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);  // Specify type for error
  const clickedCategory = useSelector((state: RootState) => state.category.clickedCategory);

  useEffect(() => {
    if (clickedCategory) {
      setError('')
      setLoading(true);
      FetchSortedProducts(clickedCategory)
        .catch(() => setError('Failed to fetch products'))  // Set a descriptive error message
        .finally(() => setLoading(false));
      console.log("Category clicked:", clickedCategory);
      console.log(data)
    }
  }, [clickedCategory]);

  const FetchSortedProducts = async (catName: string) => {
    try {
      const res = await defaultApi.get(`shop/categories/sorted/`, {
        params: { cat_name: catName }
      });
      
      if (res.status === 200) {
        setData(res.data.products);  // Ensure you are accessing the 'products' key
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      throw new Error('Failed to fetch products');
    }
  };

  return (
    <Box flex={3} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} p={2} gap={2}>
      {loading && <CircularProgress />}
      {error && <p>{error}</p>}
      {data.map((value, index) => (
        <ClothCard key={index} {...value} />
      ))}
    </Box>
  );
};

export default ProductsListSection;
