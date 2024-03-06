import React from "react";
import Banner from "../Banner/Banner";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
import Desserts from "../Desserts/Desserts";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Soup from "../Soup/Soup";

const OurMenus = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <TodaysOffer></TodaysOffer>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Desserts></Desserts>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Pizza></Pizza>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Salad></Salad>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Soup></Soup>
      </div>
    </div>
  );
};

export default OurMenus;
