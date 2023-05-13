import React, { useState } from 'react';
import ProgressBar from '../../Atoms/ProgressBar';
import FormSignupStepOne from './FormSignupStepOne';
import FormSignupStepTwo from './FormSignupStepTwo';
import FormSignupStepThree from './FormSignupStepThree';
import FormSignupStepFour from './FormSignupStepFour';
import FormSignupFooter from './FormSignupFooter';

const FormSignup = () => {
    const stepsNumber: number = 4;
    const [currentStep, setCurrentStep] = useState<number>(1);

    function nextStep() {
        if (currentStep === stepsNumber) return;
        setCurrentStep(currentStep + 1);
    }

    function previousStep() {
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
    }

    function setStep() {
        switch (currentStep) {
            case 1:
                return <FormSignupStepOne />;
            case 2:
                return <FormSignupStepTwo />;
            case 3:
                return <FormSignupStepThree />;
            case 4:
                return <FormSignupStepFour />;
            default:
                return <h2>ERROR</h2>;
        }
    }

    return (
        <div>
            <ProgressBar stepsNumber={stepsNumber} currentStep={currentStep} />
            {setStep()}
            <FormSignupFooter
                currentStep={currentStep}
                stepsNumber={stepsNumber}
                handleNextStep={() => nextStep()}
                handlePreviousStep={() => previousStep()}
            />
        </div>
    );
};

export default FormSignup;
