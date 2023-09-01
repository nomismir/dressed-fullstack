import { InputTypeEnum } from '@/types/Input';
import React from 'react';
import InputLabel from '../../Atoms/InputLabel';

type Props = {
    handleInputChanges: (key: string, value: string | number) => void;
};

const FormSignupOne: React.FC<Props> = ({ handleInputChanges }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">Informations personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                <InputLabel
                    label="Prénom"
                    isRequired
                    type={InputTypeEnum.String}
                    onChange={(value) => handleInputChanges('firstName', value)}
                    min={1}
                    max={100}
                />
                <InputLabel
                    label="Nom"
                    isRequired
                    type={InputTypeEnum.String}
                    onChange={(value) => handleInputChanges('lastName', value)}
                    min={1}
                    max={100}
                />
                <InputLabel
                    label="Age"
                    isRequired
                    type={InputTypeEnum.Number}
                    onChange={(value) => handleInputChanges('age', value)}
                    min={0}
                    max={100}
                />
                <InputLabel
                    label="Email"
                    isRequired
                    type={InputTypeEnum.Mail}
                    onChange={(value) => handleInputChanges('email', value)}
                />
            </div>
        </div>
    );
};

export default FormSignupOne;
