import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";

const useCartHook = () => {
  const { user } = useContext(AuthContex);
  const {
    isLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.uid],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/cart?userId=${user?.uid}`
      );
      return res.data;
    },
  });
  return [cart, isLoading, refetch];
};

export default useCartHook;
