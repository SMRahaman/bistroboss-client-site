import axios from "axios";
import React, { useEffect, useState } from "react";

const useMenuHook = () => {
  const [menus, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/api/menus").then((res) => {
      setMenus(res.data);
      setLoader(false);
    });
  }, [menus]);
  return [menus, loader];
};

export default useMenuHook;
