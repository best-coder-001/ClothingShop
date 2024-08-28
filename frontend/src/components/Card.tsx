import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Rating,
} from "@mui/material";
import "../../public/green-front-sweater.jpg";
import { CardDT } from "../interfaces";
import { useNavigate } from "react-router-dom";

const ClothCard = ({ id, name, price, discount, rate, photo }: CardDT) => {
  const navigate = useNavigate();

  const onCard = () => {
    navigate(`/shop/details/${id}/`);
  };

  return (
    <Card
      onClick={onCard}
      sx={{
        width: 220,
        minHeight: 320,
        p: 1,
        borderRadius: 1,
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardMedia
        sx={{ height: 250, objectFit: "cover", borderRadius: 4 }}
        image={photo}
        title="card image"
      />
      <CardContent sx={{ p: 2, boxSizing: "border-box" }}>
        <Typography>{name}</Typography>
        <Typography>Price - ${price}</Typography>
        <Rating name="read-only" size="small" value={rate} readOnly />
        {discount.percent ? (
          <Typography>Discount - {discount.percent}%</Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default ClothCard;
