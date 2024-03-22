import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenuHook = () => {
  const { refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/api/menus");
      return res.data;
    },
  });
  return [menu, refetch];
  // const [menus, setMenus] = useState([]);
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/menus").then((res) => {
  //     setMenus(res.data);
  //     setLoader(false);
  //   });
  // }, []);
  // return [menus, loader];
};

export default useMenuHook;
