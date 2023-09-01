import React from 'react';
import ProgressBar from '../../Atoms/ProgressBar';
import FormSignupStepOne from './FormSignupStepOne';
import FormSignupStepTwo from './FormSignupStepTwo';
import FormSignupStepThree from './FormSignupStepThree';
import FormSignupStepFour from './FormSignupStepFour';
import FormSignupFooter from './FormSignupFooter';
import { useSignUpForm } from '@/hooks/useSignUpForm';

const FormSignup = () => {
    const {
        stepsNumber,
        currentStep,
        values,
        nextStep,
        previousStep,
        handleInputChanges,
    } = useSignUpForm();

    function setStep() {
        switch (currentStep) {
            case 1:
                return (
                    <FormSignupStepOne
                        handleInputChanges={handleInputChanges}
                    />
                );
            case 2:
                return (
                    <FormSignupStepTwo
                        handleInputChanges={handleInputChanges}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormSignupStepThree
                        handleInputChanges={handleInputChanges}
                    />
                );
            case 4:
                return (
                    <FormSignupStepFour
                        handleInputChanges={handleInputChanges}
                    />
                );
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
