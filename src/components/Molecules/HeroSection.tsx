import React from 'react';
import Button from '@/components/Atoms/Button';

import DressedLogo from '@/images/dressed_logo.png';

import Image from 'next/image';

import ReactPlayer from 'react-player';

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen relative hero">
            <div className="absolute top-[50%] left-[50%] w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
                <ReactPlayer
                    id="player"
                    playing={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    objectFit={'cover'}
                    aspectratio={'16:9'}
                    autoplay={false}
                    url='https://www.youtube.com/embed/HN8T2IJEEOY?autoplay=1&controls=0&playlist=HN8T2IJEEOY&loop=1&mute=1&modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                showInfo: 0,
                            },
                        },
                    }}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
                <Image
                    src={DressedLogo}
                    alt="Dressed Logo"
                    className="w-full max-w-[80vw] md:max-w-4xl h-auto"
                />
                <p className="text-white text-center text-2xl md:text-3xl font-bold">
                    Dressed la 1ère boutique 100% gratuite pour les étudiants
                    dans le besoin 🔥
                </p>
                <Button
                    target="https://equipagesolidaire.fr/dressed"
                    size="lg"
                    fontWeight="bold"
                    scale
                >
                    🙋‍♀️ Inscription
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
