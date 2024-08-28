import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Stack,
  Typography,
  CircularProgress,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import { defaultApi } from "../api";

type ClothDetailResponse = {
  product: {
    id: number;
    rate: number;
    price: number;
    name: string;
    discount: {
      percent: number;
    };
    description: string;
    cat: {
      name: string;
    };
    photo: string;
    size: string;
  };
};

const ClothDetailView = () => {
  const { clothId } = useParams();
  const [data, setData] = useState<ClothDetailResponse>({
    product: {
      id: 0,
      rate: 0,
      price: 0,
      name: "",
      discount: {
        percent: 0,
      },
      description: "",
      cat: {
        name: "",
      },
      photo: "",
      size: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchDetails().finally(() => setLoading(false));
  }, []);

  const fetchDetails = async () => {
    try {
      const res = await defaultApi.get("shop/product/details/", {
        params: { clothId: clothId },
      });

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Box>
      <Box height={72}>
        <Navigation />
      </Box>
      <Stack direction={"row"} p={8}>
        <Box flex={1} justifyContent={'center'} display={'flex'}>
          <Card
            sx={{
              width: 240,
              minHeight: 320,
              p: 1,
              borderRadius: 1,
              cursor: "pointer",
            }}
            elevation={0}
          >
            <CardMedia
              sx={{ height: 250, objectFit: "cover", borderRadius: 4 }}
              image={`${data.product.photo}`}
              title="card image"
            />
            <CardContent sx={{ p: 2, boxSizing: "border-box" }}>
              <Typography>{data.product.name}</Typography>
              <Typography>Price - ${data.product.price}</Typography>
              <Rating
                name="read-only"
                size="small"
                value={data.product.rate}
                readOnly
              />
              {data.product.discount.percent ? (
                <Typography>
                  Discount - {data.product.discount.percent}%
                </Typography>
              ) : null}
            </CardContent>
          </Card>
        </Box>
        <Stack flex={2} gap={2}>
          {loading && <CircularProgress />}
          {error && <p>{error}</p>}
          <Typography variant="h4">{data.product.name}</Typography>
          <Typography variant="body1">{data.product.description}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ClothDetailView;
