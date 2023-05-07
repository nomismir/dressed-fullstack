import Gallery from 'react-photo-gallery';
import React from 'react';
import { photos } from '@/utils/photos';

type Props = {};

const Photos = (props: Props) => {
    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold mb-4">Dressed en images</h2>
            <Gallery photos={photos} />
        </div>
    );
};

export default Photos;
