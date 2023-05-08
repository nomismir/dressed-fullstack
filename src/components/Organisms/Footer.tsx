import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer
            className="
      flex items-center justify-center w-full h-24
      bg-primary text-white
      gap-2
    "
        >
            Un projet propulsé par{' '}
            <a href="https://equipagesolidaire.fr" className="underline">
                L&apos;Équipage Solidaire
            </a>{' '}
            ❤️
        </footer>
    );
};

export default Footer;
