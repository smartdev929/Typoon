import * as React from 'react';
import styles from './Staking.module.css';
import { Typography } from '@mui/material';
import Pool from '../../components/Pool/Pool';

interface poolDataType{
  pool:string,
  pooltype:string,
  reward:string,
  rewardvalue:string,
  deposit:string,
  depositvalue:string,
  apr:string,
  aprvalue:string,
  amount:string,
  amountvalue:string
}

const poolData:poolDataType[] = [
  {
    pool:'TYPH LaunchPool',
    pooltype:'Stake TYPH, get TYPH',
    reward:'TYPH Reward',
    rewardvalue:'0.00',
    deposit:'Deposited TYPH',
    depositvalue:'0.00',
    apr:'APR',
    aprvalue:'27.15%',
    amount:'Total Locked TYPH',
    amountvalue:'5,621,309.48'
  },
  {
    pool:'TYPH-BNB-LP ApeLP',
    pooltype:'Stake TYPH-BNB-LP on ApeSwap, get TYPH',
    reward:'TYPH Reward',
    rewardvalue:'0.00',
    deposit:'Deposited TYPH-BNB-LP',
    depositvalue:'0.00',
    apr:'APR',
    aprvalue:'34.20%',
    amount:'Total Locked TYPH-BNB-LP',
    amountvalue:'2,739,35'
  },
  {
    pool:'TYPH-BNB-LP v2',
    pooltype:'Stake TYPH-BNB-LP, get TYPH',
    reward:'TYPH Reward',
    rewardvalue:'0.00',
    deposit:'Deposited TYPH-BNB-LP',
    depositvalue:'0.00',
    apr:'APR',
    aprvalue:'2.57K%',
    amount:'Total Locked TYPH-BNB-LP',
    amountvalue:'174.02'
  },
  {
    pool:'TYPH-BNB-LP',
    pooltype:'Stake TYPH-BNB-LP, get TYPH',
    reward:'TYPH Reward',
    rewardvalue:'0.00',
    deposit:'Deposited TYPH-BNB-LP',
    depositvalue:'0.00',
    apr:'APR',
    aprvalue:'6.83K%',
    amount:'Total Locked TYPH-BNB-LP',
    amountvalue:'201.7'
  }
];
const Stacking = () => {
  return(
    <>
      <div className={styles.container}>

        <div className={styles.font_size_1}>Staking</div>
        <Typography className={styles.font_size_2}>Help Typhoon, get TYPH in return.<br/>TYPH pools will be added and closed as deemed necessary so make sure you check back!</Typography>
        <Typography className={styles.font_size_2}>Changes to farmsTo celebrate our partnership with ApeSwap, we have launched a new BNB-TYPH-LP staking pool <br/> with ApeLP instead! Existing pools have been paused.</Typography>
        <Typography className={styles.font_size_2}>Hint: We also have a high-APR $BANANA farm up on <a href=''>ApeSwap!</a> Go check it out and earn yourself some $BANANA.</Typography>
        <div className={styles.font_size_1}>Available pools (click to expand)</div>
        <Pool poolData={poolData}/> 


        <div style={{width:'308px' ,margin:'auto'}}>
          <img className={styles.rain} src='./assets/image/rain.png'></img>
        </div>
        
      </div>

    </>
  );
}
export default Stacking;