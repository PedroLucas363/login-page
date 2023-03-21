import { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

type Props = ButtonHTMLAttributes<any> & {
  variant?: "default" | "text";
};

function Button({ variant = "default", ...props }: Props) {
  let buttonStyle;
  switch (variant) {
    case "text":
      buttonStyle = styles.textButton;
      break;
    default:
      buttonStyle = styles.defaultButton;
      break;
  }
  return (
    <button {...props} className={`${buttonStyle} ${props?.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
