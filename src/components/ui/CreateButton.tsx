import classes from "./CreateButton.module.css";

interface CreateButtonProps {
  titleText: string;
  onClick: () => void;
}

export default function CreateButton(props: CreateButtonProps) {
  return (
    <div
      className={classes.updateButton}
      title={props.titleText}
      onClick={props.onClick}
    ></div>
  );
}
