import { DateParams, InputTypeEnum } from '@/types/Input';
import React from 'react';
import InputLabel from '../../Atoms/InputLabel';
import { participationChoices } from '@/types/SignUp';

type Props = {
    handleInputChanges: (key: string, value: string | number) => void;
};

const FormSignupThree: React.FC<Props> = ({ handleInputChanges }) => {
    const now = new Date();

    const datepickerParams: DateParams = {
        asSingle: true,
        minDate: now,
        maxDate: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
        disabledDates: [],
    };

    return (
        <div>
            <h2 className="text-lg font-semibold">Tailles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 py-5">
                <InputLabel
                    label="Taille pour le haut"
                    isRequired
                    type={InputTypeEnum.Select}
                    data={participationChoices}
                    onChange={(value) =>
                        handleInputChanges('participation', value)
                    }
                />
                <InputLabel
                    label="Choisi une des dates pour passer nous voir"
                    isRequired
                    datepickerParams={datepickerParams}
                    type={InputTypeEnum.Datetime}
                    onChange={(value) => handleInputChanges('date', value)}
                />
            </div>
        </div>
    );
};

export default FormSignupThree;
