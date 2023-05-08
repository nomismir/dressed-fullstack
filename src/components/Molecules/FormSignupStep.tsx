import React, { useState } from 'react';
import { InputTypeEnum } from '@/types/Input';
import { StepFormSignup } from '@/types/Form';
import Input from '../Atoms/Input';

type Props = {
    step: StepFormSignup;
};

const FormSignupStep: React.FC<Props> = ({ step }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">{step.title}</h2>
            <div className="grid grid-cols-2 gap-4 py-5">
                {step.inputs.map((input) => (
                    <Input
                        placeholder={input.placeholder}
                        isRequired={input.isRequired}
                        type={input.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormSignupStep;
