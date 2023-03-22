import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import LoginForm from "../../components/login";

import { TABS } from "./enums";
import styles from "./index.module.css";

function AccessPage() {
  const [currentForm, setCurrentForm] = useState<
    typeof TABS[keyof typeof TABS]
  >(TABS.LOGIN);

  return (
    <div className={styles.page}>
      <section className={styles.formSection}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <LoginForm />
      </section>
      <section className={styles.backgroundSection} />
    </div>
  );
}

export default AccessPage;
