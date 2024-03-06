import React from "react";
import useMenuHook from "../../../Hook/MenuHook/useMenuHook";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Button from "../../../Shared/ShareButton/ShareButton";

const OurMenu = () => {
  const data = useMenuHook();
  const ourMenu = data[0].slice(0, 6);
  console.log(ourMenu);

  return (
    <div>
      <div className="grid grid-cols-2 place-items-center gap-6">
        {ourMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button btnName="View all Button"></Button>
    </div>
  );
};

export default OurMenu;