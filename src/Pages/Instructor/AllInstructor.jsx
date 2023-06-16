import React from 'react';
import bgimg from '../../assets/slider/slide_1.jpg'
import { Bounce } from 'react-awesome-reveal';
import Title from '../Share/ReuseTitle/Title';
import { useQuery } from '@tanstack/react-query';
import Card from '../Share/Card/Card';
const AllInstructor = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const result = await fetch('https://assignment-twelve-server-muhammadali246397.vercel.app/postclassespage?status=approved')
            return result.json()
        }
    })
    console.log(instructors)
    
    return (
        <div>
            <div className="hero h-[60vh]" style={{ backgroundImage: `url(${bgimg})` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <Bounce>
                        <div className="max-w-md">
                            <h1 className="mb-5 text-8xl font-semibold">Instructors</h1>
                            <p className='font-bold text-lg'>HOME / INSTRUCTORS</p>
                        </div>
                    </Bounce>

                </div>
            </div>
           <div className='my-20'>
           <Title 
            subTitle={'----- Instructors -----'}
            title={'Our All Tutors'}
            ></Title>
           </div>
           <div className='grid grid-cols-3 gap-4'>
            {
                instructors.map(instructor => <Card 
                key={instructor._id}
                name={instructor.instructorName}
                img={instructor.image}
                className={instructor.className}

                ></Card>)
            }
           </div>

        </div>
    );
};

export default AllInstructor;