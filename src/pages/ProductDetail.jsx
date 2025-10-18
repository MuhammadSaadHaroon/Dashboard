import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./ProductDetail.css";
import { products } from "../data/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <Typography variant="h6">Product not found.</Typography>;
  }

  return (
    <Box className="product-detail-container">
      <Card className="product-detail-card">
        <CardMedia component="img" image={product.image} alt={product.title} className="product-detail-image" />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h5" className="product-detail-title">{product.title}</Typography>
          <Typography variant="body2" className="product-detail-description">{product.description}</Typography>
          <Typography variant="h6" className="product-detail-price">Price: ${product.price}</Typography>

          <Box mt={3} display="flex" gap={2}>
            <Button variant="contained" onClick={() => alert("Edit action (dummy)")}>Edit</Button>
            <Button variant="contained" color="error" onClick={() => alert("Delete action (dummy)")}>Delete</Button>
            <Button variant="outlined" onClick={() => navigate("/products")}>Back to List</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
