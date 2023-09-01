import React from 'react';
import Button from '@/components/Atoms/Button';
import { NavLinkItem } from '@/types/Navbar';

type Props = {
    isTransparent?: boolean;
};

const links: NavLinkItem[] = [
    {
        text: 'Comment ça fonctionne ?',
        link: '#introduction',
    },
    {
        text: 'Nos partenaires',
        link: '#partner',
    },
    {
        text: 'FAQ',
        link: '#qa',
    },
    {
        text: 'Nous soutenir',
        link: '#donation',
    },
];

const Navbar: React.FC<Props> = ({ isTransparent }) => {
    const transparentClasses: string =
        'absolute top-0 left-0 bg-gradient-to-b from-black/30 text-white';
    return (
        <div
            className={`${
                isTransparent ? transparentClasses : ''
            } h-20 z-10 w-screen px-10 md:px-20 flex items-center justify-between`}
        >
            <a href="./">
                <span className="text-3xl font-bold">Dressed.</span>
            </a>
            <ul className="hidden md:flex items-center gap-10">
                {links.map((link) => (
                    <li key={link.link}>
                        <a href={link.link}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
