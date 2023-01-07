import React from 'react';
import { Card, CardMedia } from '@mui/material';
const cardEL = (props) => {
  const { image, name } = props;
  const imageInfo = image[0];

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={imageInfo.url}
        alt={name}
      />
    </Card>
  );
};

export default cardEL;
