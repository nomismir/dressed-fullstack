import React, { useEffect, useState } from 'react';
import Button from '../Atoms/Button';

type Props = {
    stepsNumber: number;
    currentStep: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
};

const FormSignupFooter: React.FC<Props> = ({
    stepsNumber,
    currentStep,
    handleNextStep,
    handlePreviousStep,
}) => {
    return (
        <div className="flex items-center justify-end mt-5">
            <div className="flex items-center gap-3">
                <div>
                    <Button
                        onClick={handlePreviousStep}
                        isPill
                        isDisabled={currentStep === 1}
                        style="secondary"
                    >
                        Précédent
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={handleNextStep}
                        isDisabled={currentStep === stepsNumber - 1}
                        isPill
                    >
                        Suivant
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormSignupFooter;
