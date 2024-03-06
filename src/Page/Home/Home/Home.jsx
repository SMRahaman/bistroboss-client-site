import React from "react";
import Slider from "../Slider/Slider";
import CatSlider from "../CatSlider/CatSlider";
import Title from "../../../Shared/Title/Title";
import OurMenu from "../OurMenu/OurMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ImageWithTitle from "../../../Shared/ImageWithTitle/ImageWithTitle";
import bgImage from "../../../assets/home/chef-service.jpg";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Title
        title="---From 11:00am to 10:00pm---"
        header="Order Online"
      ></Title>
      <div className="max-w-6xl mx-auto">
        <CatSlider></CatSlider>
      </div>
      <div>
        <ImageWithTitle
          bgImage={bgImage}
          title="Bistro Boss"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        ></ImageWithTitle>
      </div>
      <Title title="---Check it out---" header="From Our Menu"></Title>
      <div className="max-w-6xl mx-auto">
        <OurMenu></OurMenu>
      </div>
      <Title title="---Should Try---" header="Chef Recodmmends"></Title>
      <div className="max-w-6xl mx-auto">
        <ChefRecommends></ChefRecommends>
      </div>
      <Title title="---What Our Clients Say---" header="Testimonials"></Title>
      <div className="max-w-3xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
