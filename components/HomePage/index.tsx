import * as React from 'react';
import { Grid } from '@mui/material';
import SideBar from './SideBar';
import ListPaper from '../HomePage/ListPaper'

export default function HomePage({ group }) {

  return (
    <Grid sx={{ marginTop: '30px', padding: '0 4px' }} container spacing={2}>
      <Grid item lg={3} md={4} sm={5} xs={12}>
        <SideBar group={group}/>
      </Grid>
      <Grid item lg={9} md={8} sm={7} xs={12}>
        <ListPaper group={group} />
      </Grid>
    </Grid>
  );
}
