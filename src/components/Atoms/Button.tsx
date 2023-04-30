import React from 'react';

type Props = {
    children: string;
    target?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    style?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'thin' | 'medium' | 'bold' | 'semibold';
    scale?: boolean;
};

const classes = {
    base: 'flex items-center gap-3 rounded-2xl w-fit',
    disabled: 'opacity-50 cursor-not-allowed',
    style: {
        primary: 'bg-primary text-white',
        secondary: 'bg-white',
    },
    size: {
        sm: 'text-sm p-2',
        md: 'text-md px-4 py-2',
        lg: 'text-xl px-8 py-4',
        xl: 'text-3xl px-8 py-4',
    },
    scale: 'transition-transform hover:scale-125 duration-200',
};

const Button: React.FC<Props> = ({
    children,
    target,
    onClick,
    type,
    isDisabled,
    style = 'primary',
    size = 'md',
    fontWeight = 'medium',
    scale,
}) => {
    scale = isDisabled ? false : scale;
    const componentClasses = `${classes.base} ${classes.style[style]} ${
        classes.size[size]
    } font-${fontWeight} ${scale ? classes.scale : ''}`;
    if (!target)
        return (
            <button
                onClick={onClick}
                className={`${componentClasses} ${
                    isDisabled ? classes.disabled : ''
                }`}
                disabled={isDisabled}
                type={type}
            >
                {children}
            </button>
        );
    return (
        <a href={target} className={componentClasses}>
            {children}
        </a>
    );
};

export default Button;
