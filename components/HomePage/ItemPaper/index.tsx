import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useRouter } from 'next/dist/client/router';

export default function ItemPaper({ paper, type, index }) {
  const router = useRouter()
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Card onClick={() => {
        router.push(`/${type}/${index}`)
      }} className="hover-box-shadow">
        <CardMedia
          component="img"
          alt="GIẤY DÁN TƯỜNG HÀN QUỐC"
          height="200"
          image={paper?.image}
        />
        <CardContent sx={{ paddingBottom: '0px' }}>
          <Typography component="div">
            {paper?.name || "GIẤY DÁN TƯỜNG HÀN QUỐC"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {
            router.push(`/${type}/${index}`)
          }} size="small">Xem chi tiết</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
