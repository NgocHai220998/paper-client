import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { List } from './config';
import ItemPaper from '../ItemPaper';
import { useRouter } from 'next/dist/client/router';

export default function ListPapers({ group }: any) {
  const router = useRouter()
  const { type, id } = router.query
  const [papers, setPapers] = React.useState([])

  const fetchPapers = () => {
    fetch(`https://admin.hainn.dev/groups/${type ? type : 1}`, {
      method: 'GET'
    }).then(ress => ress.json())
      .then(res => {
        setPapers(res.papers)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    if (type || group) {
      fetchPapers()
    }
  }, [type, group])

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '24px', textTransform: 'uppercase', marginBottom: '16px' }} component="h1">{group?.name || "GIẤY DÁN TƯỜNG HÀN QUỐC"}</Typography>
      </Box>
      <Grid container spacing={2}>
        {
          papers?.map((item: any, index: number) => {
            return (
              <ItemPaper type={type} index={item?.id} paper={item} key={index} />
            )
          })
        }
      </Grid>
    </Box>
  );
}
