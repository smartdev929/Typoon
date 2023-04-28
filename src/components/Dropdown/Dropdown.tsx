import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {styled} from '@mui/material/styles';
import {IconButton , ListItemIcon} from '@mui/material';
import style from './dropdown.module.css';

const options = ['BNB', 'BUDS', 'CAKE' ,'TYPE (0% fees)'];
const iconData = [
  './assets/image/token.png',
  './assets/image/busd.svg',
  './assets/image/cake.png',
  './assets/image/logo..svg'
];
const StyleButtonGroup = styled(ButtonGroup)({
  background:'transparents',
  border:'1px solid #2A3C73',
  width:'100%'
})
const arrow  = {
  border:'none',
  color:'white',
  width:'10%',
  '&:hover':{
    border:'none',
  }
}
const select = {
  textAlign:'left',
  border:'none',
  color:'white',
  width:'90%',
  fontSize:'16px',
  '&:hover':{
    border:'none'
  }
}
const Mypoper = styled(Popper)({
  position:'absolute',
  width:'100%',
  zIndex:'10000'
})
export default function Drowdown(props:any) {
  const [icon,setIcon] = React.useState<string>('');


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    props.handleSelect(index);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  console.log("dfd",iconData[selectedIndex]);
  return (
    <React.Fragment>
      <div style={{position:'relative',width:'100%'}}>
      <StyleButtonGroup ref={anchorRef} aria-label="split button">
        <Button  startIcon={<img style={{width:'25px'}} src={iconData[selectedIndex]}/>} sx={select} onClick={handleToggle}>{options[selectedIndex]}</Button>
        <Button
          sx={arrow}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </StyleButtonGroup>
      <Mypoper 
        
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        // className={style.poper}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
               
            }}
          >
            <Paper sx={{background:'#181F3D',border:'1px solid #2A3C73',width:'100%',color:'white'}}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                       <ListItemIcon><img style={{width:'20px'}} src={iconData[index]}/></ListItemIcon>
                      {option}
                     
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Mypoper>
      </div>
    </React.Fragment>
  );
}
