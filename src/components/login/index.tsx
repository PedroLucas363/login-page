import { FormikHelpers } from "formik";

import Content, { FormValues } from "./content";

function LoginForm() {
  return (
    <Content
      onSubmit={(values: FormValues, helpers: FormikHelpers<FormValues>) => {
        alert(
          `Login feito com sucesso!\nemail: ${values.email}\nsenha: ${values.password}`
        );
        helpers.resetForm();
      }}
    />
  );
}

export default LoginForm;
