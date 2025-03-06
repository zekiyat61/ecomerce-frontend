import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>
            {currency} {getCartAmount()}
          </p>
        </div>
        <hr />

        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
