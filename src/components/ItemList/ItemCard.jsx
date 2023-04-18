import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 350 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ height: 100 }}>
        <Link to="/itemDetail">
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
