import {Button} from '@mui/material';
import {styled} from '@mui/material/styles';
const ConnectButtonT = {
  background:'transparent',
  color:'white',
  fontFamily:'Roboto',
  fontSize:'13px',
  border:'1px solid rgb(42, 60, 115)',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  padding: '11px 20px',
  borderRadius: '8px',
  width: 'auto',
}
const ConnectButtonY = {
  background:'rgb(243, 186, 46)',
  color:'black',
  fontFamily:'Roboto',
  fontSize:'13px',
  border:'1px solid rgb(42, 60, 115)',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  padding: '11px 20px',
  borderRadius: '8px',
  width: 'auto',
  boxShadow: 'rgb(153 150 38 / 49%) 0px 0px 15px 0px',
  '&:hover':{
    background:'white',
    color:'rgb(243, 186, 46)'
  }
}
const disableButton = {
  background:'#81672d',
  color:'black',
  fontFamily:'Roboto',
  fontSize:'13px',
  border:'1px solid rgb(42, 60, 115)',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  padding: '11px 20px',
  borderRadius: '8px',
  width: 'auto',
  boxShadow: 'rgb(153 150 38 / 49%) 0px 0px 15px 0px',
}
const WalletButton  = (props:any) => {
  const { color , title ,disabled} = props;
  return(
    <>
      {
        disabled !== 'true' ? <Button sx={color === 'trans' ? ConnectButtonT : ConnectButtonY}>{title}</Button>:
        <Button disabled sx={disableButton}>{title}</Button>
      }
      
    </>
  );
}
export default WalletButton;