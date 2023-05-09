import React from 'react';
import { InputTypeEnum } from '@/types/Input';

type Props = {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    type: InputTypeEnum;
    min?: number;
    max?: number;
};

const InputLabel: React.FC<Props> = ({
    label,
    placeholder,
    isRequired,
    type,
    min,
    max,
}) => {
    return (
        <div className="flex flex-col">
            <label>
                {label}{' '}
                <span className="text-primary">{isRequired ? '*' : ''}</span>
            </label>
            <input
                className="rounded-md border border-grey-200 px-3 py-2 mt-2 bg-white bg-opacity-50 focus:outline-primary"
                placeholder={placeholder}
                is-required={isRequired}
                type={type}
                min={min}
                max={max}
            ></input>
        </div>
    );
};

export default InputLabel;
