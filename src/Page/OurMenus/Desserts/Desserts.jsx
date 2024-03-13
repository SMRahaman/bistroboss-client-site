import React from "react";
import banner from "../../../assets/menu/dessert-bg.jpeg";
import ImageWithTitel from "../../../Shared/ImageWithTitle/ImageWithTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import CommonButton from "../../../Shared/CommonButton/CommonButton";
import { Link } from "react-router-dom";
const Desserts = () => {
  const data = useMenuHook();
  const desserts = data[0].filter((dessert) => dessert.category === "dessert");
  const countDesserts = desserts.slice(0, 6);
  return (
    <div>
      <ImageWithTitel
        bgImage={banner}
        title={"Desserts"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ImageWithTitel>
      <div className="grid grid-cols-2 gap-5 place-items-center pt-20">
        {countDesserts.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <CommonButton
        title={"dessert"}
        btnName={"Order your favourite Food"}
      ></CommonButton>
    </div>
  );
};

export default Desserts;
