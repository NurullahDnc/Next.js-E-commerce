import React from 'react';
import { Rating } from "@mui/material";

//raitign copms

interface RaitingProps {
  product?: any;
  ratings?: any; 
}

const ProductRating = ({ product, ratings }: RaitingProps) => {

    //rating topla bol = item.rating ve acc topla, 0 dan baslayarak topla, product.reviews.length bol
    const ProductRating = ratings?.reviews?.reduce( (acc: number, item: any) => acc + item.rating, 0) / ratings?.reviews?.length;

  return (
    <div>
      <div>
        <Rating name="read-only" value={ProductRating} readOnly />
      </div>
    </div>
  );
};

export default ProductRating;
