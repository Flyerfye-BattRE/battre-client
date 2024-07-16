import classes from "./UpdateButton.module.css";

interface UpdateButtonProps {
  titleText: string;
  onClick: () => void;
}

export default function UpdateButton(props: UpdateButtonProps) {
  return (
    <div
      className={classes.updateButton}
      title={props.titleText}
      onClick={props.onClick}
    ></div>
  );
}
