// ../../assets/images/battery_banner.png
import classes from "./DeleteButton.module.css";
// import deleteIcon from '../../assets/icons/redX.png';

export default function DeleteButton({ onClick }) {
  return (
    <div className={classes.deleteButton} onClick={onClick}>
      <div className={classes.deleteIcon}/>
    </div>
      
    // <img
    //   // src={"../../assets/icons/redX.png"}
    //   alt="Delete"
    //   onClick={onClick}
    //   className={classes.updateButton}
    // />
  );
}