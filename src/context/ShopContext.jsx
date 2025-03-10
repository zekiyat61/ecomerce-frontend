import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Br";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = useCallback(
    async (itemId) => {
      console.log("item added to card");
      console.log(itemId);

      setCartItems((prevCartItems) => {
        const cartData = structuredClone(prevCartItems);
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        return cartData;
      });

      // save the card in database
      //   if (token) {
      //     try {
      //       await axios.post(
      //         `${backendUrl}/api/cart/add`,
      //         { itemId },
      //         { headers: { token } }
      //       );
      //     } catch (error) {
      //       toast.error(error.response?.data?.message || error.message);
      //     }
      //   }
    },
    [token, backendUrl]
  );

  const removeFromCart = useCallback(
    async (itemId) => {
      console.log("item removed from card");
      console.log(itemId);

      setCartItems((prevCartItems) => {
        const cartData = structuredClone(prevCartItems);
        if (cartData[itemId]) {
          delete cartData[itemId];
        }
        return cartData;
      });

      // save the card in database
      //   if (token) {
      //     try {
      //       await axios.post(
      //         `${backendUrl}/api/cart/add`,
      //         { itemId },
      //         { headers: { token } }
      //       );
      //     } catch (error) {
      //       toast.error(error.response?.data?.message || error.message);
      //     }
      //   }
    },
    [token, backendUrl]
  );

  const getCartCount = useCallback(() => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }, [cartItems]);

  const updateQuantity = useCallback(
    async (itemId, quantity) => {
      setCartItems((prevCartItems) => {
        const cartData = structuredClone(prevCartItems);
        cartData[itemId] = quantity;
        return cartData;
      });

      //   if (token) {
      //     try {
      //       await axios.post(
      //         `${backendUrl}/api/cart/update`,
      //         { itemId, quantity },
      //         { headers: { token } }
      //       );
      //     } catch (error) {
      //       toast.error(error.response?.data?.message || error.message);
      //     }
      //   }
    },
    [token, backendUrl]
  );

  const getCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce(
      (totalAmount, [itemId, quantity]) => {
        const itemInfo = products.find((product) => product._id === itemId);
        return Math.round(totalAmount + (itemInfo?.price || 0) * quantity);
      },
      0
    );
  }, [cartItems, products]);

  const getProductsData = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }, [backendUrl]);

  const getUserCart = useCallback(
    async (token) => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/cart/get`,
          {},
          { headers: { token } }
        );
        if (response.data.success) {
          const transformedCartData = {};
          Object.entries(response.data.cartData).forEach(([itemId, sizes]) => {
            transformedCartData[itemId] = Object.values(sizes).reduce(
              (sum, qty) => sum + qty,
              0
            );
          });
          setCartItems(transformedCartData);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    },
    [backendUrl]
  );

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!token && storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
    } else if (token) {
      getUserCart(token);
    }
  }, [token, getUserCart]);

  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    // removeFromCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
