import { useState, ChangeEvent } from 'react';

type FormValues = {
    [key: string]: string;
};

type UseFormReturnType = [
    FormValues,
    (name: string, value: string | number) => void
];

export const useForm = (initialValues: FormValues): UseFormReturnType => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleInputChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };

    return [values, handleInputChange];
};
