import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { defaultApi } from "../api";
import { CardDT } from "../interfaces";
import { useDispatch } from "react-redux";
import { setClickedCategory } from "../slices/catSlice";


type CategoriesResponse = {
  name: string;
};

const CategorySection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<CategoriesResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    defaultApi.get("shop/categories/sorted/");
  }, []);

  const fetchData = async () => {
    try {
      const res = await defaultApi.get("shop/categories/");
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      sx={{overflowY:"scroll",height:'500px'}}
      p={2}
    >
      {error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error trying get categories!
        </Alert>
      ) : null}
      {loading ? <CircularProgress /> : null}
      <List>
        <ListSubheader>
          <Typography variant="h5">Categories</Typography>
        </ListSubheader>
        {data?.map((value, index) => (
          <ListItem
            key={index}
            onClick={() => {
              dispatch(setClickedCategory(value.name));
            }}
          >
            <ListItemButton>
              <ListItemText inset primary={value.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategorySection;
