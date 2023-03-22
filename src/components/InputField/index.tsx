import { useField } from "formik";

import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eye-off.svg";

import styles from "./index.module.css";
import { useState } from "react";

type InputFieldProps = {
  label: React.ReactNode;
  placeholder?: string;
  name: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

function InputField({ label: labelProps, ...props }: InputFieldProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [field, meta] = useField(props);
  const isPasswordInput = props.type === "password";

  const handleTogglePasswordVisible = () => {
    setPasswordVisible((prev) => !prev);
  };

  const label =
    typeof labelProps === "string" ? (
      <label className={styles.label}>{labelProps}</label>
    ) : (
      labelProps
    );

  return (
    <div className={styles.inputContainer}>
      {label}
      <div
        className={`${styles.input} ${
          meta.touched && meta.error ? styles.error : undefined
        }`}
      >
        <input
          {...field}
          {...props}
          type={
            isPasswordInput
              ? passwordVisible
                ? "text"
                : "password"
              : props.type
          }
        />
        {isPasswordInput ? (
          <button
            className={styles.eyeContent}
            onClick={handleTogglePasswordVisible}
            disabled={props.disabled}
            type="button"
          >
            <img src={passwordVisible ? Eye : EyeOff} alt="eye" />
          </button>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default InputField;
