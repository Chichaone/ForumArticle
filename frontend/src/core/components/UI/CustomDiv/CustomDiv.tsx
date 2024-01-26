import React, {ReactNode} from 'react';

interface ICustomDiv {
    className?: string | undefined
    children?: ReactNode
}

export const CustomDiv = ({className, children}: ICustomDiv) => {

    return (
        <div className={`${className} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
};

