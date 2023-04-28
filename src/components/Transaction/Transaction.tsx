import style from  './Transaction.module.css';
import {Stack} from '@mui/material';
const Transaction = (props:any) => {
  const { value , timeVal , index } = props;
  return(
    <>
      <div className={style.box} style={{background:index % 4 === 0 || index % 4 === 1 ? '#2A3C73' : 'transparent'}}>
        <img style={{width:'20px',paddingRight:'15px'}} src='./assets/image/arrowUp.png'></img>
        <Stack direction='column' spacing={0.3}>
          <div className={style.box_font_1}>{value} BNB</div>
          <div className={style.box_font_2}>{timeVal}</div>
        </Stack>     

      </div>
    </>
  );
}
export default Transaction;