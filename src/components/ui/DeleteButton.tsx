import classes from "./DeleteButton.module.css";

interface DeleteButtonProps {
  titleText: string;
  onClick: () => void;
}

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <div
      className={classes.deleteButton}
      title={props.titleText}
      onClick={props.onClick}
    ></div>
  );
}
