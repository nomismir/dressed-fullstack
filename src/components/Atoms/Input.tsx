import React from 'react';
import { InputTypeEnum } from '@/types/Input';

type Props = {
    placeholder: string;
    isRequired?: boolean;
    type: InputTypeEnum;
    min?: number;
    max?: number;
};

const Input: React.FC<Props> = ({
    placeholder,
    isRequired,
    type,
    min,
    max,
}) => {
    return (
        <div className="flex flex-col">
            <label>
                {placeholder}{' '}
                <span className="text-primary">{isRequired ? '*' : ''}</span>
            </label>
            <input
                className="rounded-md border border-grey-200 px-3 py-2 mt-2 bg-white bg-opacity-50 focus:outline-primary"
                placeholder={placeholder}
                is-required={isRequired}
                type={type}
                min={min}
                max={max}
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            ></input>
        </div>
    );
};

export default Input;
