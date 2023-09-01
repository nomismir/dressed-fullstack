import { InputTypeEnum } from './Input';

export type FormValues = {
    [key: string]: string | number;
};

export type UseFormReturnType<T extends FormValues> = [
    T,
    (name: string, value: string | number) => void
];

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
