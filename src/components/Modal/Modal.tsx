import React, { useState } from 'react';
import  styles from './Modal.module.css';

import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  IconButton,
  Switch
} from '@mui/material';

import WalletButton from '../Button/WalletButton/Button';
import CloseIcon from '@mui/icons-material/Close';
import { green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  boxShadow: 24,
  p: 4,
  background:'rgb(25, 31, 42)',
  border:'1px solid rgb(88, 94, 117)',
};
const cliamTitle = {
  fontFamily:'Roboto',
  fontSize:'25px',
  color:'white',
  fontWeight:'700',
  marginBottom:'20px'
}
const BscTitle = {
  fontFamily:'Roboto',
  fontSize:'16px',
  color:'white',
  fontWeight:'400',
  letterSpacing:5,
  marginLeft:'20px'
}
const GreenSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 23,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
      
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {width:'94px',
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#008800',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '50px',
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
export default function BasicModal(props:any) {
  const { state , setState , type } = props
  const [checked, setChecked] = React.useState(true);
  const handleSwitch = (event:any) => {
    setChecked(event.target.checked);
  }
  const handleClose = () => setState(false)

  return (
    <div>
      <Modal
        open={state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <IconButton sx={{
                  color:'rgb(88, 94, 117)',
                  border:'1px solid rgb(88, 94, 117)',
                  borderRadius:'1px',
                }}
                onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
          </Box>
          {
            type !== 1 ? 
            <Box>  
            <Typography sx={cliamTitle}>Available TYPH Claim</Typography>
            <div className={styles.logo}>
              <img className={styles.logo_img} style={{width:'150px'}} src='./assets/image/logo..svg'></img>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography component='div' sx={{fontSize:'40px',color:'white'}}>0.00</Typography>
                <Typography component='div' sx={{fontSize:'16px',color:'white'}}>TYPH</Typography>
              </Stack>
            </div>
            <Stack sx={{pt:5}} direction='row' justifyContent='space-between' alignItems='center'>
                <span>Total Supply:</span>
                <span>20,000,000</span>
              </Stack>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <span>Your TYPH Balance:</span>
                <span>0.00</span>
              </Stack>
              <Stack sx={{mb:3}} direction='row' justifyContent='space-between' alignItems='center'>
                <span>Current Price:</span>
                <span>$0.01219486</span>
              </Stack>
              <a href='' style={{color:'#9B85D8',fontSize:'17px'}}>Get TYPH on PancakeSwap</a>
              <Box sx={{marginTop:'30px'}}>
                <WalletButton title='CONNECT' color='yellow'/>
              </Box>
            </Box>
            :
            <Box sx={{display:'flex',flexDirection:'column'}}>
              <Typography sx={cliamTitle}>Select Typhoon Deployment</Typography>

              <div className={styles.flex}>
                <img style={{width:'35px'}} src='./assets/image/download.png'></img>
                <Typography sx={BscTitle}>BINANCE SMART CHIAN{checked && '   (Test)'}</Typography>
              </div>

              <div className={styles.flex}>
                <img style={{width:'35px'}} src='./assets/image/download.png'></img>
                <Typography sx={BscTitle}>BSC TYPOON COMMUNITY{checked && '   (Test)'}</Typography>
              </div>

              <div className={styles.flex}>
                <img style={{width:'35px'}} src='./assets/image/polygon.webp'></img>
                <Typography sx={BscTitle}>POLYGON{checked && '   (Test)'}</Typography>
              </div>

              <Box sx={{display:'flex',justifyContent:'flex-end',mt:2}}>
                <Typography sx={{color:'white',marginRight:'10px'}}>Use Testnet</Typography>
                <GreenSwitch checked={checked} onClick={handleSwitch} />
              </Box>
            </Box>
          }
        </Box>
      </Modal>
    </div>
  );
}
