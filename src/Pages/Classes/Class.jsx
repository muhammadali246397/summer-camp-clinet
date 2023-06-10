import React from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import bgimg from '../../assets/slider/slide_1.jpg'
import AllClass from './AllClass';

const Class = () => {
    return (
        <div>
            <div className="hero h-[60vh]" style={{backgroundImage:`url(${bgimg})`}}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                   <Bounce>
                   <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-semibold">Classes</h1>
                        <p className='font-bold text-lg'>HOME / CLASSES</p>
                    </div>
                   </Bounce>
                </div>
            </div>
            <AllClass></AllClass>
        </div>
    );
};

export default Class;