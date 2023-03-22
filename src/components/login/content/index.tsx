import { Formik, Form, FormikHelpers } from "formik";
import { object, string } from "yup";

import Button from "../../button";
import InputField from "../../InputField";

import { FIELDS } from "../enums";
import i18n from "./i18n";
import styles from "./index.module.css";

export type FormValues = {
  [FIELDS.EMAIL]: string;
  [FIELDS.PASSWORD]: string;
};

type Props = {
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void;
};

function Content({ onSubmit }: Props) {
  const initialValues = {
    [FIELDS.EMAIL]: "",
    [FIELDS.PASSWORD]: "",
  };

  const validationSchema = object({
    [FIELDS.EMAIL]: string()
      .email(i18n.ptBR.VALIDATIONS.VALID_EMAIL)
      .required(i18n.ptBR.VALIDATIONS.REQUIRED),
    [FIELDS.PASSWORD]: string().required(i18n.ptBR.VALIDATIONS.REQUIRED),
  });

  return (
    <div className={styles.formContainer}>
      <h1>{i18n.ptBR.TITLE}</h1>
      <p className={styles.description}>{i18n.ptBR.DESCRIPTION}</p>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <InputField
            label={i18n.ptBR.FIELDS.EMAIL.LABEL}
            placeholder={i18n.ptBR.FIELDS.EMAIL.PLACEHOLDER}
            name={FIELDS.EMAIL}
            type="text"
          />
          <InputField
            label={
              <div className={styles.passwordLabel}>
                <p>{i18n.ptBR.FIELDS.PASSWORD.LABEL}</p>
                <Button variant="text" type="button">
                  {i18n.ptBR.BUTTONS.FORGOT_PASSWORD}
                </Button>
              </div>
            }
            placeholder={i18n.ptBR.FIELDS.PASSWORD.PLACEHOLDER}
            name={FIELDS.PASSWORD}
            type="password"
          />
          <Button
            variant="default"
            className={styles.submitButton}
            type="submit"
          >
            {i18n.ptBR.BUTTONS.SUBMIT}
          </Button>
        </Form>
      </Formik>
      <div className={styles.footer}>
        <p>{i18n.ptBR.SIGN_UP_LABEL}</p>
        <Button variant="text">{i18n.ptBR.BUTTONS.SIGN_UP}</Button>
      </div>
    </div>
  );
}

export default Content;
