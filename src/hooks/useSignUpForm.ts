import { useState } from 'react';
import { useForm } from './useForm';
import { SignUpFormValues, SignUpFormErrors } from '@/types/SignUp';

export function useSignUpForm() {
    const stepsNumber: number = 4;
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [errors, setErrors] = useState({});

    function nextStep() {
        if (currentStep === stepsNumber) return;
        setCurrentStep(currentStep + 1);
    }

    function previousStep() {
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
    }

    const [values, handleInputChanges] = useForm({
        firstName: null,
        lastName: null,
        age: null,
        email: null,
        position: null,
        housingAssistance: null,
        socialCriteria: null,
        gradeAttachment: null,
        topSize: null,
        bottomSize: null,
        participation: null,
        date: null,
    });

    function validateForm(values: SignUpFormValues) {
        // step 1
        // step 2
        // step 3
        // step 4

        const requiredFields = [
            'firstName',
            'lastName',
            'age',
            'email',
            'position',
            'housingAssistance',
            'socialCriteria',
            'gradeAttachment',
            'topSize',
            'bottomSize',
            'participation',
            'date',
        ];
        const fieldIsRequired = 'Ce champ est requis';
        const errors: SignUpFormErrors = {};

        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = fieldIsRequired;
            }
        });

        return errors;
    }

    return {
        stepsNumber,
        currentStep,
        values,
        nextStep,
        previousStep,
        handleInputChanges,
    };
}
