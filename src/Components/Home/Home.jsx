import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import MeaningSection from './MeaningSection/MeaningSection';
import Category from '../Category/Category';
import FeaturedAnime from './FeaturedAnime/FeaturedAnime';
import SubscriptionSection from './SubscriptionSection/SubscriptionSection';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <MeaningSection></MeaningSection>
            <FeaturedAnime></FeaturedAnime>
            {/* <SubscriptionSection></SubscriptionSection> */}
        </div>
    );
};

export default Home;