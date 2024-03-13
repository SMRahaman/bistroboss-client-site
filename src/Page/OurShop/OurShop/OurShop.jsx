import React, { useState } from "react";
import Banner from "../Banner/Banner";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "drinks", "dessert"];
  const { category } = useParams();
  const intialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intialIndex);
  // const [active, setActive] = useState(false);
  const data = useMenuHook();
  const desserts = data[0].filter((dessert) => dessert.category === "dessert");
  const pizzas = data[0].filter((pizza) => pizza.category === "pizza");
  const soups = data[0].filter((soup) => soup.category === "soup");
  const salads = data[0].filter((salad) => salad.category === "salad");
  const drinks = data[0].filter((drink) => drink.category === "drinks");
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto py-20">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList style={{ marginBottom: "40px" }}>
            <Tab style={{ background: "green", color: "white" }}>Salad</Tab>
            <Tab style={{ background: "green", color: "white" }}>Pizza</Tab>
            <Tab style={{ background: "green", color: "white" }}>Soup</Tab>
            <Tab style={{ background: "green", color: "white" }}>Drinks</Tab>
            <Tab style={{ background: "green", color: "white" }}>Dessert</Tab>
          </TabList>
          <TabPanel>{<OrderTab items={salads}></OrderTab>}</TabPanel>
          <TabPanel>{<OrderTab items={pizzas}></OrderTab>}</TabPanel>
          <TabPanel>{<OrderTab items={soups}></OrderTab>}</TabPanel>
          <TabPanel>{<OrderTab items={drinks}></OrderTab>}</TabPanel>
          <TabPanel>{<OrderTab items={desserts}></OrderTab>}</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
