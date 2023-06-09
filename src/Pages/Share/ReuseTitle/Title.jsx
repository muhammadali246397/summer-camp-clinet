import React from 'react';

const Title = ({subTitle,title}) => {
    return (
        <div className='mb-10'>
            <p className='text-center text-orange-700 italic'>{subTitle}</p>
            <h2 className='text-5xl font-bold text-center'>{title}</h2>
        </div>
    );
};

export default Title;