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
    return <p>coucou</p>;
};

export default Input;
