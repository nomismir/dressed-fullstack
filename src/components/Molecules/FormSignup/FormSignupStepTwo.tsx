import { InputTypeEnum } from '@/types/Input';
import React from 'react';
import { useForm } from '../../../hooks/useForm';
import InputLabel from '../../Atoms/InputLabel';
import { SelectChoice } from '@/types/Input';

type Props = {};

const FormSignupOne: React.FC<Props> = () => {
    const [values, handleInputChanges] = useForm({
        position: '',
        socialCriteria: '',
        gradeAttachment: null,
        housingAssistance: null,
        difficulties: '',
    });

    const baseChoices: SelectChoice[] = [
        {
            key: 1,
            value: 'Oui',
        },
        {
            key: 0,
            value: 'Non',
        },
    ];

    const positionChoices: SelectChoice[] = [
        {
            key: 1,
            value: 'Dans Paris',
        },
        {
            key: 2,
            value: 'En dehors de Paris',
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold">Situation</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-5">
                <InputLabel
                    label="Résides-tu dans Paris ou en dehors de Paris ?"
                    isRequired
                    type={InputTypeEnum.Radio}
                    data={positionChoices}
                    name="position"
                    onChange={(value) => handleInputChanges('position', value)}
                />
                <InputLabel
                    label="Es-tu bénéficiaire des APL ?"
                    isRequired
                    type={InputTypeEnum.Radio}
                    data={baseChoices}
                    name="apl"
                    onChange={(value) =>
                        handleInputChanges('housingAssistance', value)
                    }
                />
                <InputLabel
                    label="Es-tu bénéficiaire d'une bourse sur critères sociaux ?"
                    isRequired
                    type={InputTypeEnum.Radio}
                    data={baseChoices}
                    name="socialCriteria"
                    onChange={(value) =>
                        handleInputChanges('socialCriteria', value)
                    }
                />
                <InputLabel
                    label="Notification du CROUS"
                    isRequired
                    type={InputTypeEnum.File}
                    isDisabled={values.socialCriteria !== '1'}
                    onChange={(value) =>
                        handleInputChanges('gradeAttachment', value)
                    }
                />
            </div>
        </div>
    );
};

export default FormSignupOne;
