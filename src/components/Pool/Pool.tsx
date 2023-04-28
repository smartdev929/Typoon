
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import style from './Pool.module.css';
import Divider from '@mui/material/Divider';
import WalletButton from '../Button/WalletButton/Button';
const accordionStyle = {
  background:'rgb(8, 14, 33)',
  padding:'10px',
  marginBottom:'20px',
  marginTop:'20px',
}
const link = {
  fontFamily:'Roboto',
  fontWeight:'800',
  fontSize:'17px',
  color:'white'
}
export default function Pool(props:any) {
  const  { poolData } = props;
  console.log('poolData',poolData);
  return (
      
    <div>
      {
        poolData.map((info:any,index:number) => (
          <Accordion sx={accordionStyle} key={index}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{marginBottom:'20px',padding:'10px 20px'}}
          >
            <div className={style.box}>
              <div className={style.left}>
                {
                  index === 0 ? <img style={{width:'40px'}} src='./assets/image/logo..svg'></img>
                  :
                  <div className={style.img}>
                    <div className={style.img_1}><img style={{width: '20px',display:'block'}} src='./assets/image/logo..svg'></img></div>
                    <div className={style.img_2}><img style={{width: '20px',display:'block'}} src='./assets/image/token.png'></img></div>
                  </div>
                  
                }
                <div style={{marginLeft:'20px'}}>
                  <div className={style.font_size_1_1} style={{textDecorationLine: index === 2 || index === 3  ? 'line-through':'none'}}>{info.pool}</div>
                  <div className={style.font_size_2}>{info.pooltype}</div>
                </div>
              </div>
                
              <div className={style.right}>
                <div className={style.rect}>
                  <div>
                    <div className={style.font_size_3}>{info.reward}</div>
                    <div className={style.font_size_4}>{info.rewardvalue}</div>
                  </div>
                  <div>
                    <div className={style.font_size_3}>{info.deposit}</div>
                    <div className={style.font_size_4}>{info.depositvalue}</div>
                  </div>
                </div>
                <div className={style.rect}>
                  <div>
                    <div className={style.font_size_3}>{info.apr}</div>
                    <div className={style.font_size_4}>{info.aprvalue}</div>
                  </div>
                  <div>
                    <div className={style.font_size_3}>{info.amount}</div>
                    <div className={style.font_size_4}>{info.amountvalue}</div>
                  </div>
                </div>
              </div>
  
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',paddingBottom:'30px'}}>
            {
              index === 0 && 
              <div>
                <div className={style.font5}>
                  Thanks for supporting our TYPH token launch! This is a limited pool to earn TYPH by staking TYPH just for you!
                </div>
                <div className={style.font6}>This pool currently charges a 0.5% fee on withdrawal.</div>
              </div>
            }
            {
              index === 1 && 
              <div>
                <div className={style.font6}>Stake TYPH-BNB-LP, get TYPH in return.</div>
                <div className={style.font6}>
                  To get TYPH-BNB-LP, head over to <a style={link} href=''>ApeSwap</a> and add liquidity to the TYPH-BNB pair. Alternatively, use ApeRocket to convert existing LPs. You can then stake the LP tokens you received for TYPH!
                </div>
              </div>
            }
            {
              index === 2 && 
              <div>
                <div className={style.font6}>Stake TYPH-BNB-LP, get TYPH in return.</div>
                <div className={style.font6}>To get TYPH-BNB-LP, head over to <a style={link} href=''>Pancakeswap</a> and add liquidity to the TYPH-BNB pair. You can then stake the LP tokens you received for TYPH!</div>
                <div className={style.font6}>If you staked in the old pool before, please unstake and follow the <a style={link} href=''>LP migration guide</a> from PancakeSwap.</div>
              </div>
            }
            {
              index === 3 &&
              <div>
                <div className={style.font6}>Stake TYPH-BNB-LP, get TYPH in return.</div>
                <div className={style.font6}>To get TYPH-BNB-LP, head over to <a style={link} href=''>Pancakeswap</a> and add liquidity to the TYPH-BNB pair. You can then stake the LP tokens you received for TYPH!</div>
              </div>
            }
            <Divider sx={{background:'rgb(255,255,255,0.2)',marginTop:'40px',marginBottom:'40px'}}/>
            <WalletButton color='color' title='CONNECT'/>
          </AccordionDetails>
        </Accordion>
        ))
      }
      
     
    </div>
  );
}
