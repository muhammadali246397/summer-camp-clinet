import React from 'react';
import Slider from '../SliderSection/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;