import React from 'react';
import Slider from '../SliderSection/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;