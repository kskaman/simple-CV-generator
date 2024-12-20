import { useState } from "react";

import buttonStyles from "../styles/Button.module.css";
import formStyles from "../styles/FormContainer.module.css";
import sidebarStyles from "../styles/Sidebar.module.css";

interface Props {
  remainOnForm: (value: boolean) => void;
}

const Form = ({ remainOnForm }: Props) => {
  const [step, setStep] = useState<number>(1);

  const steps = [
    { key: 1, label: "Your Info" },
    { key: 2, label: "Education" },
    { key: 3, label: "Experience" },
    { key: 4, label: "Submit" },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1].key);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1].key);
    } else {
      remainOnForm(false);
    }
  };

  return (
    <div className={formStyles.formContainer}>
      {/* Side Panel for Step Indicators */}
      <div className={sidebarStyles.sidePanel}>
        <ul>
          {steps.map((stepObj) => (
            <li
              key={stepObj.key}
              className={`${sidebarStyles.stepItem} ${
                stepObj.key === step ? sidebarStyles.highlighted : ""
              }`}
            >
              <div className={sidebarStyles.indexNumber}>
                {steps.findIndex((s) => s.key === stepObj.key) + 1}
              </div>
              <div>{stepObj.label}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Panel for Form Content */}
      <div className={formStyles.mainPanel}>
        <div className={formStyles.formBody}>
          {step === 1 && <div>Form for Your Info</div>}
          {step === 2 && <div>Form for Education</div>}
          {step === 3 && <div>Form for Experience</div>}
          {step === 4 && <div>Review and Submit</div>}
        </div>

        <div className={formStyles.navigationButtons}>
          <button className={buttonStyles.button} onClick={prevStep}>
            Back
          </button>
          <button
            className={buttonStyles.button}
            onClick={nextStep}
            disabled={currentStepIndex === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
