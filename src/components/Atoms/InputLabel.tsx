import React, { useState } from 'react';
import { InputTypeEnum, SelectChoice, DateParams } from '@/types/Input';
import Datepicker from 'react-tailwindcss-datepicker';

type Props = {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    type: InputTypeEnum;
    min?: number;
    max?: number;
    data?: SelectChoice[];
    name?: string;
    isDisabled?: boolean;
    datepickerParams?: DateParams;
    onChange: (value: any) => void;
};

const InputLabel: React.FC<Props> = ({
    label,
    placeholder,
    isRequired,
    type,
    min,
    max,
    data,
    name,
    isDisabled,
    datepickerParams,
    onChange,
}) => {
    const [value, setValue] = useState({
        date: new Date(),
    });

    const handleValueChange = (newValue) => {
        console.log('newValue:', newValue);
        setValue(newValue);
    };

    const disabledClasses = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
    function defineInput() {
        switch (type) {
            case InputTypeEnum.String:
                return (
                    <input
                        type="text"
                        placeholder={placeholder}
                        disabled={isDisabled}
                        className="input w-full"
                        onChange={(event) => onChange(event.target.value)}
                    />
                );
            case InputTypeEnum.Number:
                return (
                    <input
                        type="number"
                        placeholder={placeholder}
                        disabled={isDisabled}
                        className="input w-full"
                        min={min}
                        max={max}
                        onChange={(event) => onChange(event.target.value)}
                    />
                );
            case InputTypeEnum.Mail:
                return (
                    <input
                        type="email"
                        placeholder={placeholder}
                        disabled={isDisabled}
                        className="input w-full"
                        onChange={(event) => onChange(event.target.value)}
                    />
                );
            case InputTypeEnum.Select:
                return (
                    <select
                        className="select w-full"
                        disabled={isDisabled}
                        onChange={(event) => onChange(event.target.value)}
                    >
                        <option disabled>Choix</option>
                        {data.map((d) => {
                            return <option key={d.key}>{d.value}</option>;
                        })}
                    </select>
                );
            case InputTypeEnum.File:
                return (
                    <input
                        type="file"
                        disabled={isDisabled}
                        className="file-input w-full "
                    />
                );
            case InputTypeEnum.Toggle:
                return (
                    <input
                        type="checkbox"
                        disabled={isDisabled}
                        className="toggle"
                        onChange={(event) => onChange(event.target.value)}
                    />
                );
            case InputTypeEnum.Radio:
                return (
                    <div className="flex items-center gap-4">
                        {data.map((d) => {
                            return (
                                <div
                                    key={d.key}
                                    className="flex items-center gap-3"
                                >
                                    <input
                                        disabled={isDisabled}
                                        type="radio"
                                        id={`${name}-${d.key.toString()}`}
                                        name={name}
                                        className="radio"
                                    />
                                    <label className="text-xs">{d.value}</label>
                                </div>
                            );
                        })}
                    </div>
                );
            case InputTypeEnum.Datetime:
                return (
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        asSingle={datepickerParams?.asSingle}
                        placeholder={datepickerParams?.placeholder}
                        minDate={datepickerParams?.minDate}
                        maxDate={datepickerParams?.maxDate}
                        startFrom={datepickerParams?.startFrom}
                        readOnly={datepickerParams?.isReadOnly}
                        disabled={datepickerParams?.isDisabled}
                        separator={'-'}
                        displayFormat={'DD/MM/YYYY'}
                    />
                );
        }
    }

    return (
        <div className={`flex flex-col ${disabledClasses}`}>
            <label className="pb-3">
                {label}{' '}
                <span className="text-primary">{isRequired ? '*' : ''}</span>
            </label>
            {defineInput()}
        </div>
    );
};

export default InputLabel;
