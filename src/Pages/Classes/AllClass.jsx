import React from 'react';
import Title from '../Share/ReuseTitle/Title';
import { useQuery } from '@tanstack/react-query';
import Card from '../Share/Card/Card';
import { Slide } from 'react-awesome-reveal';

const AllClass = () => {
    const { data: instractor = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/instructor')
            return result.json()
        }
    })
    // const { data: instractor = [], refetch } = useQuery(['instractor'], async () => {
    //     const result = await fetch('http://localhost:5000/instructor')
    //     return result.json();
    // })

    console.log(instractor)
    return (
        <div className='my-20'>
            <Title
                subTitle={'----- Classes -----'}
                title={'Our All Classes'}
            ></Title>
            <div className='grid grid-cols-3 gap-7'>
                {instractor.map(ins => <Slide direction='right' key={ins._id}>
                    <div  className=' mb-5 p-2 hover:bg-slate-50'>
                    <figure className='h-60'><img style={{ height: "300px" }} className=' w-full' src={ins.classImg} alt="Shoes" /></figure>
                    <div className="text-center mt-4 ">
                        <h2 className="font-bold text-xl text-orange-600 mt-20">{ins.className}</h2>
                        <p>Instractor : {ins.instructorName}</p>
                        <p className='mt-2'>Price : <span className='text-orange-600'>${ins.price}</span></p>
                        <p>Available sets: {ins.available}</p>

                        <button className='btn w-full text-lg hover:text-orange-600 mt-4  bg-[#B2AB8C] text-white border-none rounded-none font-bold'>select</button>


                    </div>
                </div>
                </Slide>)}
            </div>
        </div>
    );
};

export default AllClass;