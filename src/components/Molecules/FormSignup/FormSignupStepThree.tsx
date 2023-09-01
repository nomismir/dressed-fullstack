import { InputTypeEnum } from '@/types/Input';
import React from 'react';
import InputLabel from '../../Atoms/InputLabel';
import { topSizeChoices, bottomSizeChoices } from '@/types/SignUp';

type Props = {
    handleInputChanges: (key: string, value: string | number) => void;
};

const FormSignupThree: React.FC<Props> = ({ handleInputChanges }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">Tailles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 py-5">
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
