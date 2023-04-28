import styles from './Description.module.css';
import { Box } from '@mui/material';


const Description = () => {
  return(
    <>
    <Box sx={{width:'100%',mt:7,padding:"0px 10px"}}>
      <div className={styles.help}>
        <div className={styles.help_content}>Do not withdraw funds directly into exchange wallets. Most exchanges do not support transfers from smart contracts, including Typhoon</div>
        <div className={styles.help_content}>Due to BSC network congestion causing The Graph index to occasionally lag behind, it may take slightly longer for deposits to properly appear<br/> Please try to withdraw again a bit later if you are experiencing issues</div>
      </div>
    </Box>
    </>
  );
}
export default Description;