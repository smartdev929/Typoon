import * as React from 'react';
import Header from '../../components/Header/Header';
import styles from  './Homepage.module.css';
import {Box , Stack} from '@mui/material';
import IconBox from '../../components/IconBox/IconBox';
import Panel from '../../components/Panel/Panel';
import Transaction from '../../components/Transaction/Transaction';
import WalletButton from '../../components/Button/WalletButton/Button';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Dropdown from '../../components/Dropdown/Dropdown'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface transactionType{
  value:number,
  timeVal:string,
}

const toggleStyle = {
  lineHeight: 'inherit',
  cursor: 'pointer',
  flex: '1 1 0%',
  padding:'10px 0px',
  border: '0px',
  outline: '0px',
  color: 'white',
  textTransform: 'uppercase',
  background: 'transparent',
  transition: 'all 0.2s ease 0s',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '3px',
  width: '100%',
};
const activetoggleStyle = {
  lineHeight: 'inherit',
  cursor: 'pointer',
  flex: '1 1 0%',
  padding:'10px 0px',
  border: '0px',
  outline: '0px',
  color: 'white',
  textTransform: 'uppercase',
  background: 'rgb(42, 60, 115)',
  transition: 'all 0.2s ease 0s',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '3px',
  width: '100%',
}
const donateButtonStyle = {
  background: 'transparent',
  height: '100%',
  border:'none',
  borderLeft: '1px solid gray',
  minWidth: '130px',
  width: '135px',
  color: 'white',
  fontSize: '12px',
  fontWeight: '700px',
  fontFamily: 'Roboto',
  borderRadius:'0px',
  '&hover':{
    background:'black',
    
  }
}

const TransactionData:transactionType[] = [
  { value:0.1 , timeVal:'2 hour ago' },
  { value:10 , timeVal:'6 hour ago' },
  { value:1 , timeVal:'9 hour ago' },
  { value:0.1 , timeVal:'11 hour ago' },
  { value:0.1 , timeVal:'11 hour ago' },
  { value:1 , timeVal:'13 hour ago' },
  { value:1 , timeVal:'13 hour ago' },
  { value:1 , timeVal:'1 day ago' },
  { value:1 , timeVal:'1 day ago' },
  { value:0.1 , timeVal:'1 day ago' },
];
const BNB = [0.1,1,10,50];
const BUSD = [10,100,1000,10000];
const CAKE = [1,10,100];
const TYPE = [100,1000,10000];


const Homepage = () => {

  const [action,setAction] = useState<number>(0);
  const [note ,setNote] = useState<string>('');
  const [amount,setAmount] = useState<number>(0.1);
  const [checked, setChecked] = React.useState(true);
  const [adr,setAdr] = useState<string>('');
  const [type,setType] = useState(0);
  const [select,setSelect] = useState<number>(0);
  const [amountCnt,SetAmountCnt] = useState<number>(0);


  const handleAction = (id:number) => {
    setAction(id);
  }
  const handleAmount = (val:number,nId:number) => {
    setAmount(val);
    SetAmountCnt(nId);
  }
  const handleChange = (event:any) => {
    setAmount(event.target.value);
  }
  const handleNote = (event:any) => {
    setNote(event.target.value);
  }
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleAddr = (event:any) => {
    setAdr(event.target.value);
  }
  const handleSelect = (index:number) => {
    setSelect(index);
    console.log("slelec",select);
  }


  // const handleSelect = (event: SelectChangeEvent) => {
  //   setType(event.target.value);
  // };


  return(
    <>
      
      <div className={styles.container}>
        <Box sx={{maxWidth:'1280px',margin:"auto",padding:'0px 15px'}}>
          {/* <div className={styles.help}>
            <div className={styles.help_content}>Do not withdraw funds directly into exchange wallets. Most exchanges do not support transfers from smart contracts, including Typhoon</div>
            <div className={styles.help_content}>Due to BSC network congestion causing The Graph index to occasionally lag behind, it may take slightly longer for deposits to properly appear<br/> Please try to withdraw again a bit later if you are experiencing issues</div>
          </div> */}


          <div className={styles.body}>
            <div className={styles.body_left}>
              <div className={styles.body_title}>{action === 0 ? 'Make your secure deposit' : 'Make your secure withdrawal'}</div>
              <div className={styles.left_column}>
                <IconBox img='./assets/image/action.png' content='Action' />
                <ToggleButtonGroup className={styles.action}
                  exclusive
                  aria-label="text alignment"
                >
                  <ToggleButton sx={action === 0 ? activetoggleStyle : toggleStyle} onClick={()=>handleAction(0)} value="DEPOSIT" >
                    DEPOSIT
                  </ToggleButton>
                  <ToggleButton sx={action === 1 ? activetoggleStyle : toggleStyle} onClick={()=>handleAction(1)} value="WITHDRAWAL" >
                    WITHDRAWAL
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              
              
              { action === 0 ?
                <div>
                  <div className={styles.left_column}>
                    <IconBox img='./assets/image/token.png' content='Token type' />
                      <Box className={styles.dropdown_box}>
                        <Dropdown handleSelect={handleSelect} />
                      </Box>
                  </div>
                  <div className={styles.left_column}>
                    <IconBox img='./assets/image/amout.png' content='Amount' />
                    <div className={styles.amount_box}>
                        <ToggleButtonGroup className={styles.amount}
                          exclusive
                          
                          aria-label="text alignment"
                        >
                          {
                            select === 0 && 
                            BNB.map((info,index) => (
                              <ToggleButton sx={amountCnt === index ? activetoggleStyle : toggleStyle} onClick={()=>handleAmount(info,index)} value={info} >
                                {info}
                            </ToggleButton>
                            ))
                          }
                          {
                            select === 1 && 
                            BUSD.map((info,index) => (
                              <ToggleButton sx={amountCnt === index ? activetoggleStyle : toggleStyle} onClick={()=>handleAmount(info,index)} value={info} >
                                {info}
                            </ToggleButton>
                            ))
                          }
                          {
                            select === 2 && 
                            CAKE.map((info,index) => (
                              <ToggleButton sx={amountCnt === index ? activetoggleStyle : toggleStyle} onClick={()=>handleAmount(info,index)} value={info} >
                                {info}
                            </ToggleButton>
                            ))
                          }
                          {
                            select === 3 && 
                            TYPE.map((info,index) => (
                              <ToggleButton sx={amountCnt === index ? activetoggleStyle : toggleStyle} onClick={()=>handleAmount(info,index)} value={info} >
                                {info}
                            </ToggleButton>
                            ))
                          }
                        </ToggleButtonGroup>

                        <div style={{color:'white',textAlign:'center',padding:'15px'}}>-or-</div>
                        <input className={styles.input} type='number' value={amount} onChange={handleChange}></input>
                        <div className={styles.sure}>
                          <span className={styles.sure_font}>Not sure what this is? </span>
                          <a href=''>Click to get help</a>
                        </div>
                    </div>
                  </div>
                  
                  <div className={styles.connectBtn}>
                    <WalletButton color='yellow' title='CONNECT' />
                    <div className={styles.descript_title} style={{marginTop:'40px'}}>Hint: It is recommended you wait a little between  deposit and  withdrawal. Give your deposit some time to mix with deposits from other users, so that it won’t be possible to trace your transaction back to you.
                    </div>
                  </div>
                </div>
 //////////////////////////////////////////////////////////////////////           
             :                                                
//////////////////////////////////////////////////////////////////////
                <div>
                  <div className={styles.left_column}>
                    <IconBox img='./assets/image/note.png' content='Note' />
                    <div className={styles.note_box}>
                      <input className={styles.input} type='text' value={note} onChange={handleNote}></input>
                    
                    </div>
                    
                  </div>
                  <div className={styles.left_column}>
                    <IconBox img='./assets/image/adr.png' content='Recipient address' />
                    <ButtonGroup className={styles.adr_box} variant="outlined">
                      <input className={styles.adr} type='text' value={adr} onChange={handleAddr}></input>
                      <Button size='small' sx={donateButtonStyle}>Donate to TYPH</Button>
                    </ButtonGroup>
                    
                  </div>

                  <div className={styles.left_column}>
                    <IconBox img='./assets/image/replay.png' content='Relayer' />
                    <div className={styles.relayer}>
                      <Checkbox checked={checked} onChange={handleCheck} {...label} defaultChecked size='small' sx={{color:'white'}}/>
                      <Stack direction='row' alignItems='center'>
                        <span className={styles.relpay_font}>Use Secure Relayer (+1% fee)</span>
                        <a href='' style={{color:'grey',fontSize:'14px'}}>(what is this?)</a>
                      </Stack>
                    </div>
                    
                  </div>
                  <div className={styles.connectBtn} style={{marginTop:'0px'}}>
                    <div className={styles.descript_title} style={{marginBottom:'40px',marginTop:'0px'}}>Hint: It is recommended you wait a little between deposit and withdrawal. Give your deposit some time to mix with deposits from other users, so that it won’t be possible to trace your transaction back to you.
                    </div>
                    {
                      !checked ? <WalletButton color='yellow' title='CONNECT' />
                      : <WalletButton color='yellow' title='WITHDRAW' disabled='true' /> 
                    }
                  </div>
                </div>
            }
            </div>


            <div className={styles.body_right}>
              <div className={styles.body_title}>Latest Deposits</div>
              <Stack direction='row' spacing={1} alignItems='center'sx={{marginBottom:'15px'}}>
                <Panel img='./assets/image/volumn.png' title='7d Volume' content='$0 USD'/>
                <Panel img='./assets/image/token.png' title='Balance' content='$0 USD'/>
              </Stack>
              <div className={styles.body_right_content}>
                {
                  TransactionData.map((info:any,index:any) => (
                    <Transaction key={index} index={index} value={info.value} timeVal={info.timeVal}/>
                  ))
                }
                <div className={styles.body_right_text}>* includes transactions across all contracts</div>
              </div>
            </div>
          </div>

          <div className={styles.work_order}>
              <div className={styles.order_title}>How does it work?</div>
              <Box sx={{width:'100%'}}>
                <div className={styles.order_list}>
                  <List img='./assets/image/token.png' title='1. Deposit' content='You deposit funds into the Typhoon smart contract and receive a randomly generated piece of text (a note) back.' />
                  <List img='./assets/image/red.svg' title='2. Wait' content='Leave the deposit in Typhoon and wait a bit. The longer you wait, the more deposits from other users will pass through Typhoon as well, providing anonymity.' />
                  <List img='./assets/image/file.png' title='3. Withdraw' content='Upon providing the note, the smart contract will transfer the funds to a wallet of your choice.' />
                </div>
              </Box>
          </div>
        </Box>
        
        
      </div>
    </>
  );
}
export default Homepage;