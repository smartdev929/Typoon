import style from './Footer.module.css';
import {Stack,Box} from '@mui/material';


const Footer  = () => {
  return(
    <>
      <div className={style.box}>
        <div className={style.main}>
          <div className={style.left}>
              <span className={style.left_title}>Built with APIs from</span>
              <img style={{width:'100px'}} src='./assets/image/footer-logo.svg'></img>
            </div>
            <div className={style.middle}>
              <div className={style.middle_title}>typhoon v7.3.0 - made with ❤️</div>
            </div>
            <Stack direction='row' spacing={2}>
            <img style={{width:'30px'}} src='./assets/image/m.png'></img>
            <img style={{width:'30px'}}  src='./assets/image/telegram.png'></img>
            <img style={{width:'30px'}}  src='./assets/image/tw.png'></img>
          </Stack>
        </div>
      </div>
    </>
  );
}
export default Footer;