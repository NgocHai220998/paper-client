import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ListInfo({ paper }: any) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP84Y53ZThVoEvr-u8Kf02X6Wrg0WZXpurQ&usqp=CAU");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const converArray = (order: any) => {
    return order.split(',')
  }

  return (
    <Grid container>
      <Box component="div">
        <Typography sx={{ fontSize: '24px' }} component="h1">{paper?.name || "GIẤY DÁN TƯỜNG HÀN QUỐC"}</Typography>
      </Box>
      <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {!!paper?.order?.length && converArray(paper?.order || "").map((item: any, index: number) => (
            <ImageListItem key={`item-${index}`}>
              <Box
                onClick={() => {
                  setCurrentImage(item);
                  handleClickOpen();
                }}
                sx={{ cursor: 'pointer', maxWidth: '100px' }}
                className="hover-box-shadow"
                component="img"
                src={`${item}`}
                srcSet={`${item}`}
                alt={"GIẤY DÁN TƯỜNG HÀN QUỐC"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ảnh đã thi công"}</DialogTitle>
        <DialogContent>
          <Box
            sx={{ cursor: 'pointer', maxWidth: '300px' }}
            component="img"
            src={currentImage}
            alt="Giấy dán tường hàn quốc"
            loading="lazy"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
