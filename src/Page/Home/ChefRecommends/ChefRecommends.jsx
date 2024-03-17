import React from "react";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import MenuCard from "../../../Shared/MenuCard/MenuCard";
const ChefRecommends = () => {
  const [data] = useMenuHook();
  const chefRecommendsData = data.slice(0, 6);
  console.log(chefRecommendsData);
  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      {chefRecommendsData.map((card) => (
        <MenuCard key={card._id} card={card}></MenuCard>
      ))}
    </div>
  );
};

export default ChefRecommends;
