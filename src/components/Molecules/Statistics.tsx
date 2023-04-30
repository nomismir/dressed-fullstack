import React from 'react';
import Counter from '@/components/Atoms/Counter';

type Props = {};

const statistics = [
    {
        header: '',
        end: 487,
        separator: ' ',
        footer: 'Nombre de vêtements distribués',
    },
    {
        header: '',
        end: 189,
        separator: ' ',
        footer: 'Nombre d’étudiants aidés',
    },
    {
        header: '',
        end: 179,
        separator: ' ',
        footer: 'Nombre de kilos de vêtement sauvés',
    },
    {
        header: '+ de',
        end: 13,
        separator: ' ',
        footer: 'Partenaires',
    },
];

const Statistics = (props: Props) => {
    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold my-4">Dressed en chiffre</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto my-6">
                {statistics.map((statistic, index) => (
                    <Counter
                        key={index}
                        header={statistic.header}
                        end={statistic.end}
                        separator={statistic.separator}
                        footer={statistic.footer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Statistics;
