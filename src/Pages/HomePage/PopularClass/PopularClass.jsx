import React, { useEffect, useState } from 'react';
import Title from '../../Share/ReuseTitle/Title';

const PopularClass = () => {
    const [classes,setClasses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/class")
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
            <h2>popular classes {classes.length}</h2>
        </div>
    );
};

export default PopularClass;