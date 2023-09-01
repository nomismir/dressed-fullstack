import { useState } from 'react';
import { FormValues, UseFormReturnType } from '@/types/Form';

export function useForm<T extends FormValues>(
    initialValues: T
): UseFormReturnType<T> {
    const [values, setValues] = useState<T>(initialValues);

    const handleInputChange = (name: string, value: string | number) => {
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };

    return [values, handleInputChange];
}
