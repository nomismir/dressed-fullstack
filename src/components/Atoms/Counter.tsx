import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

type CounterProps = {
    header?: string;
    end: number;
    separator?: string;
    footer: string;
};

const Counter = ({
    header = '',
    end,
    separator = ' ',
    footer,
}: CounterProps) => {
    return (
        <span className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">{header}</h1>
            <p>
                <CountUp end={end} separator={separator}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                            <span
                                className="text-4xl font-bold text-primary"
                                ref={countUpRef}
                            />
                        </VisibilitySensor>
                    )}
                </CountUp>
            </p>
            <h1 className="text-2xl text-center">{footer}</h1>
        </span>
    );
};

export default Counter;
