import * as React from 'react';
import styles from './Header.module.css'
import WalletButton from '../Button/WalletButton/Button';
import { Button ,IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Modal from '../Modal/Modal';
const Header = () => {
  const [isClick,setIsClick] = useState(false);
  const [isModal,setIsModal] = useState(false);
  const [type,setType] = useState<number>();
  const hambugerClick = () => {
    setIsClick(!isClick);
  }
  const handleModalFirst = () => {
    setIsModal(true);
    setType(1);
  }
  const handleModalSecond = () => {
    setIsModal(true);
    setType(2);
  }
  return(
    <>
      <div className={styles.header_body}>
        <div className={styles.header_main}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link to='/'><img  src='./assets/image/logo..svg'></img></Link>
              <span className={styles.logo_title}>Typhoon Network</span>
            </div>
            <div className={styles.bsc_btn} onClick={handleModalFirst}>
              <img style={{width:'30px',}} src='./assets/image/download.png'></img>
              <span className={styles.bsc_btn_font}>BSC</span>
            </div>
          </div>
          <div className={styles.hambuger}>
            <IconButton sx={{color:'white'}} onClick={hambugerClick}>
              <MenuIcon/>
            </IconButton>
          </div>
          <div className={styles.right}>
            <div className={styles.menulist}>
              <Link className={styles.link} to='/staking'>Staking</Link>
              <a className={styles.link} onClick={handleModalSecond} >Claim TYPH</a>

                            
              <a href='' className={styles.link}>Docs</a>
              <a href='' className={styles.link}>Whitepaper</a>
              <div className={styles.buy_btn}>
                <img style={{width:'20px'}} src='./assets/image/logo..svg'></img>
                <span className={styles.buy_btn_title}>Buy @ $ 0.013</span>
              </div>
              <WalletButton color='trans' title='CONNECT'/>
            </div>
          </div>
        </div>
        {
          isClick &&
        
          <div className={styles.hamguger_menu_list}>
              <a href=''>Staking</a>
              <a href=''>Claim TYPH</a>
              <a href=''>Docs</a>
              <a href=''>Whitepaper</a>
              <div className={styles.buy_btn}>
                <img style={{width:'20px'}} src='./assets/image/logo..svg'></img>
                <span className={styles.buy_btn_title}>Buy @ $ 0.013</span>
              </div>
              <WalletButton color='trans' title='CONNECT' type='type'/>
          </div>
        }
        <Modal state={isModal} setState = {setIsModal} type={type}/>

      </div>
    </>
  );
}
export default Header;