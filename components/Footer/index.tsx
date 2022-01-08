import { Box } from '@mui/system';
import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
export default function FooterCustom() {

  return (
    <Box sx={{ marginTop: '150px' }}>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <Button onClick={() => {
          window.open('https://www.facebook.com/profile.php?id=100005944332960', '_blank');
        }} sx={{ color: 'white' }} variant="outlined" startIcon={<FacebookIcon />}>
              Facebook
            </Button>
          </li>
          <li className="social-icon__item">
            <Button sx={{ color: 'white' }} variant="outlined" startIcon={<ContactPhoneIcon />}>
              0961576312
            </Button>
          </li>
          <li className="social-icon__item">
            <Button sx={{ color: 'white' }} variant="contained" startIcon={<div>Zalo: </div>}>
              Liên hệ với tôi
            </Button>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Button variant="text" sx={{ color: 'white' }}>Trang chủ</Button>
            <Button variant="text" sx={{ color: 'white' }}>Giới thiệu</Button>
            <Button variant="text" sx={{ color: 'white' }}>Liên hệ</Button>
          </li>
        </ul>
        <p>&copy;2022 GIẤY DÁN TƯỜNG HÀN QUỐC | TUẤN ANH</p>
      </footer>
    </Box>
  );
}
