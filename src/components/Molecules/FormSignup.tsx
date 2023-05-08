import React, { useState } from 'react';
import { InputTypeEnum } from '@/types/Input';
import ProgressBar from '../Atoms/ProgressBar';
import FormSignupStep from './FormSignupStep';
import { StepFormSignup } from '@/types/Form';
import FormSignupFooter from './FormSignupFooter';

const FormSignup = () => {
    const stepsNumber: number = 4;
    const [currentStep, setCurrentStep] = useState<number>(1);

    function addStep() {
        if (currentStep === stepsNumber) return;
        setCurrentStep(currentStep + 1);
    }

    const steps: StepFormSignup[] = [
        {
            title: 'Informations personnelles',
            inputs: [
                {
                    placeholder: 'Prénom',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                    min: 1,
                    max: 100,
                },
                {
                    placeholder: 'Nom',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                    min: 1,
                    max: 100,
                },
                {
                    placeholder: 'Age',
                    isRequired: true,
                    type: InputTypeEnum.Number,
                    value: null,
                    min: 10,
                    max: 77,
                },
                {
                    placeholder: 'Email',
                    isRequired: true,
                    type: InputTypeEnum.Mail,
                    value: null,
                    min: 1,
                    max: 100,
                },
            ],
        },
        {
            title: 'Situation',
            inputs: [
                {
                    placeholder: 'Résides-tu à Paris ?',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                },
            ],
        },
    ];

    return (
        <main>
            <ProgressBar stepsNumber={stepsNumber} currentStep={currentStep} />
            {steps.map((step) => {
                if (
                    steps.findIndex((s) => s.title === step.title) + 1 ===
                    currentStep
                )
                    return <FormSignupStep step={step} />;
            })}

            {/* {steps.map((step) => (
                <FormSignupStep step={step} />
            ))} */}
            <FormSignupFooter
                currentStep={currentStep}
                stepsNumber={stepsNumber}
            />
        </main>
    );
};

export default FormSignup;
