import React, { ReactNode } from 'react';


type TContainerProps = {
    children: ReactNode;
}
const Container = ({children}: TContainerProps) => {
    return (
        <div className='bg-slate-500'>
            {children}
        </div>
    );
};

export default Container;