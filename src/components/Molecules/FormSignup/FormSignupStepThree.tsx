import { InputTypeEnum } from '@/types/Input';
import React from 'react';
import { useForm } from '../../../hooks/useForm';
import InputLabel from '../../Atoms/InputLabel';
import { SelectChoice } from '@/types/Input';

type Props = {};

const FormSignupThree: React.FC<Props> = () => {
    const [values, handleInputChanges] = useForm({
        toSize: null,
        bottomSize: null,
    });

    const topSizeChoices: SelectChoice[] = [
        {
            key: 'xs',
            value: 'XS',
        },
        {
            key: 's',
            value: 'S',
        },
        {
            key: 'm',
            value: 'M',
        },
        {
            key: 'l',
            value: 'L',
        },
        {
            key: 'xl',
            value: 'XL',
        },
        {
            key: 'xxl',
            value: 'XXL',
        },
        {
            key: 'other',
            value: 'Autre',
        },
    ];

    const bottomSizeChoices: SelectChoice[] = [
        {
            key: 32,
            value: '32',
        },
        {
            key: 34,
            value: '34',
        },
        {
            key: 36,
            value: '36',
        },
        {
            key: 38,
            value: '38',
        },
        {
            key: 40,
            value: '40',
        },
        {
            key: 42,
            value: '42',
        },
        {
            key: 44,
            value: '44',
        },
        {
            key: 46,
            value: '46',
        },
        {
            key: 48,
            value: '48',
        },
        {
            key: 'other',
            value: 'Autre',
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold">Tailles</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-5">
                <InputLabel
                    label="Taille pour le haut"
                    isRequired
                    type={InputTypeEnum.Select}
                    data={topSizeChoices}
                    onChange={(value) => handleInputChanges('topSize', value)}
                />
                <InputLabel
                    label="Taille pour le bas"
                    isRequired
                    type={InputTypeEnum.Select}
                    data={bottomSizeChoices}
                    onChange={(value) =>
                        handleInputChanges('bottomSize', value)
                    }
                />
            </div>
        </div>
    );
};

export default FormSignupThree;
