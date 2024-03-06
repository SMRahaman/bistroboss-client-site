import React from "react";
import Title from "../../../Shared/Title/Title";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import CommonButton from "../../../Shared/CommonButton/CommonButton";

const TodaysOffer = () => {
  const data = useMenuHook();
  const todaysOffer = data[0].filter((offer) => offer.category === "offered");
  const countTodaysOffer = todaysOffer.slice(0, 10);
  return (
    <div>
      <div>
        <Title title="---Don't miss---" header="Today's Offer"></Title>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-5">
        {countTodaysOffer.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <CommonButton btnName={"Order your Favourite Food "}></CommonButton>
    </div>
  );
};

export default TodaysOffer;
