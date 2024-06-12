import React from "react";

interface ToggleButtonProps {
  buttonId: string;
  text: string;
  // className: string;
  actionFn: () => void; 
}

export default function ToggleButton(props: ToggleButtonProps) {
  const Text = props.text;

  const handleClick = () => {
    props.actionFn();
  };

  return (
    // <button className={props.className} onClick={handleClick}>
    <button onClick={handleClick}>
      {Text}
    </button>
  );
}
