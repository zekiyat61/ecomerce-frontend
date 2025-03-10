import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
// import { FaTrash } from "react-icons/fa"; // Import the trash icon
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,
    //  removeFromCart
     } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // const handleRemove = (_id) => {
  //   removeFromCart(_id);
  //   setCartData((prev) => prev.filter((item) => item._id !== _id));
  // };

  useEffect(() => {
    if (products.length > 0) {
      let tempData = [];
      Object.entries(cartItems).forEach((element) => {
        products.forEach((item) => {
          if (item._id == element[0]) {
            tempData.push(item);
          }
        });
      });

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, Number(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={cartItems[item._id]}
              />
              {/* Bin Icon for Removal */}
              {/* <FaTrash
                onClick={() => handleRemove(item._id)}
                className="text-pink-500 cursor-pointer w-5 h-5" // Adjust size and color
                title="Remove item" // Tooltip for accessibility
              /> */}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
