import React, { useState } from 'react';
import { InputTypeEnum, SelectChoice } from '@/types/Input';

type Props = {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    type: InputTypeEnum;
    min?: number;
    max?: number;
    data?: SelectChoice[];
    onChange: (value: string | number) => void;
};

const InputLabel: React.FC<Props> = ({
    label,
    placeholder,
    isRequired,
    type,
    min,
    max,
    data,
    onChange,
}) => {
    const [value, setValue] = useState('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    function defineInput() {
        switch (type) {
            case InputTypeEnum.String:
                return (
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="input w-full"
                        value={value}
                        onChange={handleChange}
                    />
                );
            case InputTypeEnum.Number:
                return (
                    <input
                        type="number"
                        placeholder={placeholder}
                        className="input w-full"
                        min={min}
                        max={max}
                        value={value}
                        onChange={handleChange}
                    />
                );
            case InputTypeEnum.Mail:
                return (
                    <input
                        type="email"
                        placeholder={placeholder}
                        className="input w-full"
                        value={value}
                        onChange={handleChange}
                    />
                );
            case InputTypeEnum.Select:
                return (
                    <select
                        className="select w-full"
                        value={value}
                        onChange={handleChange}
                    >
                        <option disabled selected>
                            Choix
                        </option>
                        {data.map((d) => {
                            return <option key={d.key}>{d.value}</option>;
                        })}
                    </select>
                );
            case InputTypeEnum.File:
                return <input type="file" className="file-input w-full " />;
            case InputTypeEnum.Toggle:
                return (
                    <input
                        type="checkbox"
                        className="toggle"
                        value={value}
                        onChange={handleChange}
                    />
                );
        }
    }

    return (
        <div className="flex flex-col">
            <label className="pb-3">
                {label}{' '}
                <span className="text-primary">{isRequired ? '*' : ''}</span>
            </label>
            {defineInput()}
        </div>
    );
};

export default InputLabel;
