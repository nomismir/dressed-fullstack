import React, { useState } from 'react';
import { FaTiktok, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Introduction() {
    return (
        <div className="p-8 w-full">
            <div>
                <h2 className="text-4xl font-bold my-4 text-center">
                    Comment ça fonctionne ?
                </h2>
                <hr className="w-3/5 md:w-1/3 bg-primary h-1 mx-auto my-4" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 p-6 text-base text-justify flex flex-col gap-6">
                    <p className="">
                        Dressed constitue la première boutique de vêtements 100%
                        gratuite pour les étudiants dans le besoin ! 👕 Comment
                        ça fonctionne ?
                    </p>
                    <p className="">
                        1) Nous récupérons des vêtements neufs auprès de grandes
                        marques ♻️ (issus de précédentes collections invendues,
                        de fin de saison ou présentant des défauts de
                        fabrications)
                    </p>
                    <p className="">
                        2) Nous les référençons, nous les trions et nous les
                        amenons à la boutique 🏬
                    </p>
                    <p className="">
                        3) Nous ouvrons les portes de la boutique aux étudiants
                        en situation de précarité pour leur permettre de
                        s&apos;offrir des vêtements neufs <b>GRATUITEMENT</b> !
                        👕
                    </p>
                </div>
                <div className="md:w-1/2 p-6">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/vFhYu8xbYg8"
                        title="TEASER DRESSED (2023)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
