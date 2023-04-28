import {Box,Typography} from '@mui/material';
import style from './IconBox.module.css';

const contentStyle = {
  color:'rgba(83,93,121)',
  paddingLeft:'15px'
}
const IconBox  = (props:any) => {
  const { img , content } = props;
  return(
    <>
      <Box className={style.icon_box}>
        <img style={{width:'16px'}} src={img}></img>
        <Typography sx={contentStyle}>{content}</Typography>
      </Box>
    </>
  );
}
export default IconBox;