import React from "react";
import banner from "../../../assets/menu/soup-bg.jpg";
import ImageWithTitel from "../../../Shared/ImageWithTitle/ImageWithTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import CommonButton from "../../../Shared/CommonButton/CommonButton";
const Soup = () => {
  const [data] = useMenuHook();
  const soups = data.filter((soup) => soup.category === "soup");
  const countSoup = soups.slice(0, 6);
  return (
    <div>
      <ImageWithTitel
        bgImage={banner}
        title={"Soup"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ImageWithTitel>
      <div className="grid grid-cols-2 gap-5 place-items-center pt-20 ">
        {countSoup.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="pb-28">
        <CommonButton
          title={"soup"}
          btnName={"Order your favourite Food"}
        ></CommonButton>
      </div>
    </div>
  );
};

export default Soup;
