import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import SocialIcon from '@/components/Atoms/SocialIcon';

const socials = [
    {
        Icon: FaInstagram,
        link: 'https://www.instagram.com/dressed.fr/li',
        name: 'dressed.fr',
    },
    {
        Icon: FaLinkedinIn,
        link: 'https://www.linkedin.com/company/dressed/',
        name: 'Dressed',
    },
    {
        Icon: FaTiktok,
        link: 'https://www.tiktok.com/@dressed.fr',
        name: 'dressed.fr',
    },
];

function SocialNetwork() {
    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold my-4">Nos réseaux</h2>
            <p className="text-2xl my-4">
                Suivez-nous sur nos réseaux sociaux pour être au courant de nos
                dernières actualités !
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto my-6">
                {socials.map((social, index) => (
                    <SocialIcon
                        key={index}
                        Icon={social.Icon}
                        link={social.link}
                        name={social.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default SocialNetwork;
