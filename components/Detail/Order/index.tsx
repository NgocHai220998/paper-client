import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CircularProgress from '@mui/material/CircularProgress';

export default function Order({ paper }: any) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendOrder = () => {
    setIsLoading(true)
    const data = JSON.stringify({
      order: {
        link: window.location.href,
        name: name,
        phone: phone,
        product: paper?.name || "GIẤY DÁN TƯỜNG HÀN QUỐC",
        description: "Viết chú thích ở đây",
        status: 'chua_lien_he'
      }
    })

    fetch("https://admin.hainn.dev/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    }).then(ress => ress.json())
      .then(res => {
        handleClose();
        setIsLoading(false);
        alert("Thêm thông tin thành công, chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.")
      }).catch(err => console.log(err))
  }

  return (
    <Box>
      <Button size="large" color="error" variant="contained" startIcon={<ShoppingCartCheckoutIcon />} onClick={handleClickOpen}>
        Đặt hàng sản phẩm
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{paper?.name || "GIẤY DÁN TƯỜNG HÀN QUỐC"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Để lại số tên và số điện thoại, chúng tôi sẽ liên hệ với bạn.
          </DialogContentText>
          <TextField
            autoFocus
            value={name}
            margin="dense"
            id="name"
            label="Họ và tên"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextField
            value={phone}
            margin="dense"
            id="phone"
            label="Số điện thoại"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button
            onClick={handleSendOrder}
            disabled={isLoading}
          >
            {
              isLoading ? (<CircularProgress />) : "Gửi thông tin"
            }
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
