import * as React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Order from '../Order';

export default function ListOrder({ paper }: any) {

  return (
    <Box sx={{ marginTop: '12px' }}>
      <Box sx={{ marginBottom: '8px' }}>
        <Button onClick={() => {
          window.open('https://www.facebook.com/profile.php?id=100005944332960', '_blank');
        }} variant="outlined" startIcon={<FacebookIcon />}>
          Facebook
        </Button>
      </Box>
      <Box sx={{ marginBottom: '8px' }}>
        <Button variant="outlined" startIcon={<ContactPhoneIcon />}>
          0961576312
        </Button>
      </Box>
      <Box sx={{ marginBottom: '8px' }}>
        <Button variant="outlined" startIcon={<div>Zalo: </div>}>
          Liên hệ với tôi
        </Button>
      </Box>
      <Box sx={{ marginBottom: '8px' }}>
        <Order paper={paper} />
      </Box>
    </Box>
  );
}
