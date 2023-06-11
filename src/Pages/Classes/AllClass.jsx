import React, { useState } from 'react';
import Title from '../Share/ReuseTitle/Title';
import { useQuery } from '@tanstack/react-query';
import Card from '../Share/Card/Card';
import { Slide } from 'react-awesome-reveal';
import ClassCard from './ClassCard';

const AllClass = () => {
   
    const { data: instractor = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/instructor')
            return result.json()
        }
    })
    console.log(instractor)

    return (
        <div className='my-20'>
            <Title
                subTitle={'----- Classes -----'}
                title={'Our All Classes'}
            ></Title>
            <div className='grid grid-cols-3 gap-7'>
                {instractor.map(ins => <ClassCard 
                key={ins._id}
                ins={ins}
                ></ClassCard>)}
            </div>
        </div>
    );
};

export default AllClass;