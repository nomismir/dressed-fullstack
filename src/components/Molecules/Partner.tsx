import React from 'react';

import Bouygues from '@/images/partner/bouygues.webp';
import Celio from '@/images/partner/celio.webp';
import Emmaus from '@/images/partner/emmaus.webp';
import Lyrique from '@/images/partner/lyrique.webp';
import Nexity from '@/images/partner/nexity.webp';
import Panopli from '@/images/partner/panopli.webp';
import Play from '@/images/partner/play.webp';
import Qonto from '@/images/partner/qonto.webp';
import Tenue from '@/images/partner/tenue.webp';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';

type Props = {};

const Partner = (props: Props) => {
    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold mb-4">Partenaires</h2>
            <section className="bg-white">
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        loop
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image
                                src={Celio}
                                alt="Partner 2"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Emmaus}
                                alt="Partner 3"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Lyrique}
                                alt="Partner 4"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Bouygues}
                                alt="Partner 1"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Nexity}
                                alt="Partner 5"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Panopli}
                                alt="Partner 6"
                                className="w-4/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Play}
                                alt="Partner 7"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Qonto}
                                alt="Partner 8"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Tenue}
                                alt="Partner 9"
                                className="w-3/5 mx-auto"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Partner;
