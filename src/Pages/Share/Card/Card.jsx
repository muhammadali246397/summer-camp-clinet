import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Card = ({img,name,price }) => {
    return (

        <div>
            
                <div className="hover:bg-slate-100 h-2/3 mb-10 w-96">
                    <Slide duration={2000}>
                        <div>
                            <figure className='h-52'><img className='h-52 w-full' src={img} alt="Shoes" /></figure>
                            <div className="text-center mt-4 ">
                                <h2 className="font-bold text-xl text-orange-600">{name}</h2>
                                <p className='mt-2'>Price : ${price}</p>
                            </div>
                        </div>
                    </Slide>
                </div>
        </div>

    );
};

export default Card;