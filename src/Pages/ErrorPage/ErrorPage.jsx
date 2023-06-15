import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../../assets/404.svg'


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div id="error-page">
            <div>
                <div className='w-2/3 mx-auto relative'>
                    <h3 className='text-3xl absolute top-20 left-80 text-orange-600 font-semibold'>Page Not Found</h3>
                    <img className='w-full' src={errorImg} alt="" />
                </div>
            </div>
        <p>
          
        </p>
      </div>
    );
};

export default ErrorPage;