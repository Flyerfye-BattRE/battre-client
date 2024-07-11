// ../../assets/images/battery_banner.png
import classes from "./DeleteButton.module.css";
// import deleteIcon from '../../assets/icons/redX.png';

interface DeleteButtonProps {
  titleText: string;
  onClick: () => void;
}

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <div className={classes.deleteButton} title={props.titleText} onClick={props.onClick}>
    </div>
  );
}