
import style from './Panel.module.css';


const Panel = (props:any) => {
  const { img, title ,content } = props;
  return(
    <>
      <div className={style.panel}>
        <img style={{width:'50px',paddingRight:"15px"}} src={img}></img>
        <div>
          <div className={style.title}>{title}</div>
          <div className={style.content}>{content}</div>
        </div>
      </div>
    </>
  );
}
export default Panel;