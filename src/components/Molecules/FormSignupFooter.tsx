import React, { useEffect, useState } from 'react';
import Button from '../Atoms/Button';

type Props = {
    stepsNumber: number;
    currentStep: number;
};

const FormSignupFooter: React.FC<Props> = ({ stepsNumber, currentStep }) => {
    return (
        <div className="flex items-center justify-end mt-5">
            <div className="flex items-center gap-3">
                <div>
                    <Button isPill isDisabled style="secondary">
                        Précédent
                    </Button>
                </div>
                <div>
                    <Button isPill>Suivant</Button>
                </div>
            </div>
        </div>
    );
};

export default FormSignupFooter;
