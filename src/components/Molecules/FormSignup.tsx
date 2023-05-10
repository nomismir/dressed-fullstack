import React, { useState } from 'react';
import { InputTypeEnum } from '@/types/Input';
import ProgressBar from '../Atoms/ProgressBar';
import FormSignupStep from './FormSignupStep';
import { StepFormSignup } from '@/types/Form';
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

    const steps: StepFormSignup[] = [
        {
            title: 'Informations personnelles',
            inputs: [
                {
                    label: 'Prénom',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                    min: 1,
                    max: 100,
                },
                {
                    label: 'Nom',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                    min: 1,
                    max: 100,
                },
                {
                    label: 'Age',
                    isRequired: true,
                    type: InputTypeEnum.Number,
                    value: null,
                    min: 10,
                    max: 77,
                },
                {
                    label: 'Email',
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
                    label: 'Résides-tu à Paris ?',
                    isRequired: true,
                    type: InputTypeEnum.String,
                    value: null,
                },
                {
                    label: `Es-tu bénéficiaire d'une bourse sur critères sociaux ?`,
                    isRequired: true,
                    type: InputTypeEnum.Toggle,
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
                    return <FormSignupStep key={step.title} step={step} />;
            })}

            <FormSignupFooter
                currentStep={currentStep}
                stepsNumber={stepsNumber}
                handleNextStep={() => nextStep()}
                handlePreviousStep={() => previousStep()}
            />
        </main>
    );
};

export default FormSignup;
