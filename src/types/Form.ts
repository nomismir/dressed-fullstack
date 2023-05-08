import { InputTypeEnum } from './Input';

export type StepFormSignup = {
    title: string;
    inputs: InputForm[];
};

export type InputForm = {
    label: string;
    isRequired: boolean;
    type: InputTypeEnum;
    value: null | string | number | Date;
    min?: number;
    max?: number;
};
