import React from 'react';
import { StepFormSignup } from '@/types/Form';
import InputLabel from '../Atoms/InputLabel';

type Props = {
    step: StepFormSignup;
};

const FormSignupStep: React.FC<Props> = ({ step }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">{step.title}</h2>
            <div className="grid grid-cols-2 gap-4 py-5">
                {step.inputs.map((input) => (
                    <InputLabel
                        label={input.label}
                        isRequired={input.isRequired}
                        type={input.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormSignupStep;
