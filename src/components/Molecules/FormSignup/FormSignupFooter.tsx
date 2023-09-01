import React, { useEffect, useState } from 'react';
import Button from '../../Atoms/Button';

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
        <div className="flex items-center sticky bottom-0 left-0 justify-end py-4 bg-white">
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
                    <Button onClick={handleNextStep} isPill>
                        {currentStep === stepsNumber ? `M'inscrire` : 'Suivant'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormSignupFooter;
