import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import MeaningSection from './MeaningSection/MeaningSection';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <MeaningSection></MeaningSection>
        </div>
    );
};

export default Home;