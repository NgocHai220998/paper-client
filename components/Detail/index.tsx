import * as React from 'react';
import { Grid } from '@mui/material';
import SideBar from '../HomePage/SideBar';
import ListPaper from '../HomePage/ListPaper'
import { Box } from '@mui/system';
import ListOrder from './ListOrder/index';
import ListContact from './ListContact/index';
import ListInfo from './ListInfo/index';
import { useRouter } from 'next/dist/client/router';

export default function Detail() {

  const router = useRouter()
  const { type, id } = router.query
  const [paper, setPaper] = React.useState()
  const [group, setGroup] = React.useState()

  const fetchPapers = () => {
    fetch(`http://localhost:4000/papers/${id}`, {
      method: 'GET'
    }).then(ress => ress.json())
      .then(res => {
        setPaper(res?.paper)
        setGroup(res?.group)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    if (id) {
      fetchPapers()
    }
  }, [id])

  return (
    <Box>
      <Grid sx={{ marginTop: '30px', padding: '0 16px' }} container spacing={2}>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <div className="img-wrapper">
            <img className="inner-img" src={paper?.image || "https://source.unsplash.com/random/400x400"} />
          </div>
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <Box component="h2" sx={{ margin: 0 }}>
            GIẤY DÁN TƯỜNG HÀN QUỐC
          </Box>
          <Box>
            <ListOrder />
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Box component="h2" sx={{ margin: 0 }}>
            HỖ TRỢ TRỰC TUYẾN
          </Box>
          <Box>
            <ListContact paper={paper} />
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: '30px', padding: '0 16px' }} container spacing={2}>
        <Grid item lg={3} md={4} sm={5} xs={12}>
          <SideBar />
        </Grid>
        <Grid item lg={9} md={8} sm={7} xs={12}>
          <ListInfo paper={paper} />
          <ListPaper group={group} />
        </Grid>
      </Grid>
    </Box>
  );
}
