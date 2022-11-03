import React from 'react';
import RowFlexBox from '../atoms/RowFlexBox';
import Thumbnail from '../atoms/Thumbnail';
import ListItem from '../atoms/ListItem';

export default function CarItem({
  brand,
  name,
  segment,
  fuelType,
  amount,
  thumbnail
}) {
  return (
    <RowFlexBox>
      <ListItem left>
        <h6>{brand}</h6>
        <h6>{name}</h6>
        <p>
          {segment} / {fuelType}
        </p>
        <p>월 {amount.toLocaleString()}원 부터</p>
      </ListItem>
      <Thumbnail src={thumbnail} />
    </RowFlexBox>
  );
}
