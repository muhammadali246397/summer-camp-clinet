import React, { useEffect, useState } from 'react';
import Title from '../../Share/ReuseTitle/Title';
import Card from '../../Share/Card/Card';

const PopularClass = () => {
    const [classes,setClasses] = useState([]);
    useEffect(() => {
        fetch("https://assignment-twelve-server-muhammadali246397.vercel.app/postclasses?status=approved")
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    console.log(classes)
    return (
        <div className='my-20'>
            <Title 
            subTitle={'-----Class-----'}
            title={'Our Popular Classes'}
            ></Title>
            <div  className='md:grid grid-cols-3 gap-4 mt-10 p-4'>
                {
                    classes.map(items => <Card
                        key={items._id}
                        img={items.classImg}
                        name={items.className}
                        price={items.price}
                        ></Card>)
                }
            </div>
        </div>
    );
};

export default PopularClass;