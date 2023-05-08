import React, { useEffect, useState } from 'react';

type Props = {
    stepsNumber: number;
    currentStep: number;
};

const ProgressBar: React.FC<Props> = ({ stepsNumber, currentStep }) => {
    const [progress, setProgress] = useState<number>();

    useEffect(() => {
        const newProgress = (currentStep * 100) / stepsNumber;
        setProgress(newProgress);
    }, [currentStep, stepsNumber]);

    return (
        <div className="flex flex-col my-5 gap-3">
            <div className="h-2 rounded-full w-full bg-white overflow-hidden">
                <div
                    style={{ width: `${progress}%` }}
                    className={`h-full bg-primary transform duration-150`}
                ></div>
            </div>
            <div className="flex items-center justify-end">
                <span className="text-sm">
                    {currentStep} / {stepsNumber}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
