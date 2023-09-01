import React from 'react';
import InputLabel from '../../Atoms/InputLabel';
import { InputTypeEnum } from '@/types/Input';
import { SignUpFormValues } from '@/types/SignUp';
import { baseChoices, positionChoices } from '@/types/SignUp';

type Props = {
    handleInputChanges: (key: string, value: string | number) => void;
    values: SignUpFormValues;
};

const FormSignupOne: React.FC<Props> = ({ handleInputChanges, values }) => {
    const socialCriteria: number = values.socialCriteria;

    return (
        <div>
            <h2 className="text-lg font-semibold">Situation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 py-5">
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
                    isDisabled={socialCriteria !== 1}
                    onChange={(value) =>
                        handleInputChanges('gradeAttachment', value)
                    }
                />
            </div>
        </div>
    );
};

export default FormSignupOne;
