import { InputTypeEnum } from './Input';

export type StepFormSignup = {
    title: string;
    inputs: InputForm[];
};

export type InputForm = {
    label: string;
    placeholder?: string;
    isRequired: boolean;
    type: InputTypeEnum;
    isActive?: boolean;
    value: null | string | number | Date;
    min?: number;
    max?: number;
};
