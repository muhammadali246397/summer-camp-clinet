import React, { useEffect, useState } from 'react';
import Title from '../../Share/ReuseTitle/Title';
import Card from '../../Share/Card/Card';

const PopularInstractor = () => {
    const [instractors, setInstractor] = useState([]);
    useEffect(() => {
        fetch("https://assignment-twelve-server-muhammadali246397.vercel.app/postclasses?status=approved")
        .then(res => res.json())
        .then(data => setInstractor(data))
    },[])
    return (
        <div className='my-20'>
            <Title 
            subTitle={'-----Instractors-----'}
            title={"Our Popular Instractors"}
            ></Title>

            <div className='grid grid-cols-3'>
                {
                    instractors.map(instractor => <Card 
                    key={instractor._id}
                    img={instractor.image}
                    name={instractor.instructorName}
                    className={instractor.className}
                    >
                    </Card>)
                }
            </div>
            
        </div>
    );
};

export default PopularInstractor;