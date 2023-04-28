import style from './List.module.css';
import {Stack} from '@mui/material';


const List = (props:any) => {
  const { img , title , content } = props;
  return(
    <>
      <Stack className={style.list} direction='column' spacing={3} sx={{width:{xs:'100%',sm:'30%'},mt:7}}>
        <img style={{width:"20px"}} src={img}></img>
        <div className={style.title}>{title}</div>
        <div className={style.content}>{content}</div>
      </Stack>
    </>
  );
}
export default List;