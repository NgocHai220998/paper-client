import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { ListPapers } from './config';
import { useRouter } from 'next/dist/client/router';

export default function SideBar({ group }) {
  const router = useRouter()
  const [groups, setGroups] = React.useState([])

  const fetchGroups = () => {
    fetch("http://localhost:4000/groups", {
      method: 'GET'
    }).then(ress => ress.json())
      .then(res => {
        setGroups(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchGroups()
  }, [])

  const handleBorder = (item: any) => {
    return item?.id === group?.id ? '10px solid red' : 'none'
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ backgroundColor: '#2276d2', color: 'white' }} component="nav" aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChildFriendlyIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="DANH MỤC SẢN PHẨM" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          {
            groups?.map((item: any, index: number) => {
              return (
                <ListItem key={index} disablePadding sx={{ borderLeft: handleBorder(item), borderRight: handleBorder(item)}}>
                  <ListItemButton onClick={() => {
                    router.push(`/${item.id}`)
                  }}>
                    <ListItemText sx={{ textTransform: 'uppercase' }} primary={item.name} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </nav>
    </Box>
  );
}
