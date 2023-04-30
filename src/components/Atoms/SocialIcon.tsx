import React from 'react';

type SocialIconProps = {
    Icon: any;
    link: string;
    name: string;
};

const SocialIcon = ({ Icon, link, name }: SocialIconProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-150 flex flex-col justify-center items-center text-primary"
        >
            <Icon className="text-4xl" />
            <p className="text-2xl">{name}</p>
        </a>
    );
};

export default SocialIcon;
