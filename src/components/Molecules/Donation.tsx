import React from 'react';
import Button from '@/components/Atoms/Button';

type Props = {};

const Donation = (props: Props) => {
    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold mb-4">Nous soutenir</h2>
            <p className="text-lg font-medium my-6">
                Vos dons permettent de financer le bon fonctionnement de la
                boutique (assurance, cartons, local…) et de proposer des
                vêtements neufs aux étudiants dans le besoin ! Chaque geste
                compte, nous prenons également les dons en nature en excellent
                état !
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 justify-center items-center">
                <Button target="https://equipagesolidaire.fr/dressed" size="md">
                    👕 Don en nature
                </Button>
                <Button target="https://equipagesolidaire.fr/dressed" size="md">
                    🙏 Don financier
                </Button>
            </div>
        </div>
    );
};

export default Donation;
