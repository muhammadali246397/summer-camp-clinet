import React, { Children } from 'react';
import { Slide } from 'react-awesome-reveal';

const Card = ({img,name,price,className }) => {
    return (

        <div>
            
                <div className="hover:bg-slate-100 h-2/3 mb-10 w-96">
                    <Slide duration={1000}>
                        <div>
                            <figure className='h-60'><img style={{height:"300px"}} className=' w-full' src={img} alt="Shoes" /></figure>
                            <div className="text-center mt-4 ">
                                <h2 className="font-bold text-xl text-orange-600">{name}</h2>
                               {
                                price? <p className='mt-2'>Price : ${price}</p>: <p className='mt-2'>Class Name : {className}</p>
                               }
                            </div>
                        </div>
                    </Slide>
                </div>
        </div>

    );
};

export default Card;