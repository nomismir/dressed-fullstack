import React from 'react';
import Button from '@/components/Atoms/Button';
import Navbar from '@/components/Molecules/Navbar';
import DressedLogo from '@/assets/images/dressed_logo.png';
import Image from 'next/image';
import ReactPlayer from 'react-player';

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen relative overflow-hidden">
            <Navbar is-transparent />
            <ReactPlayer
                id="player"
                playing={true}
                loop={true}
                muted={true}
                width={'100%'}
                height={'100%'}
                objectFit={'cover'}
                autoplay={false}
                url='https://www.youtube.com/embed/HN8T2IJEEOY?autoplay=1&controls=0&playlist=HN8T2IJEEOY&loop=1&mute=1&modestbranding=1&end=37" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
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

            <div className="w-full h-full absolute top-0 text-white left-0 flex flex-col justify-center gap-8 px-20">
                <h1 className="text-6xl font-bold">Bienvenue sur Dressed</h1>
                <p className="md:text-xl">
                    La 1ère boutique 100% gratuite pour les étudiants dans le
                    besoin 🔥
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
