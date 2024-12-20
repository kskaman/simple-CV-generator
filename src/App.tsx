import { useState } from "react";

import styles from "./styles/App.module.css";
import buttonStyles from "./styles/Button.module.css";

import Form from "./components/Form";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const onGetStarted = () => {
    setShowForm(true);
  };

  const introElement = (
    <>
      <h1>Welcome! Create Your CV in Just a Few Steps.</h1>
      <button
        className={`${buttonStyles.button} ${buttonStyles.homePageButton}`}
        onClick={onGetStarted}
      >
        Get Started
      </button>
    </>
  );

  return (
    <>
      {showForm ? (
        <Form remainOnForm={setShowForm} />
      ) : (
        <div className={styles.introContainer}>{introElement}</div>
      )}
    </>
  );
};

export default App;
