import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-pink-700 cursor-pointer flex flex-col justify-between"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out object-center h-[270px] object-contain"
          src={image[0]}
          alt={name}
        />
      </div>
      <div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

// PropTypes validation
ProductItem.propTypes = {
  id: PropTypes.string.isRequired, // Ensure id is a required string
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming image is an array of strings
  name: PropTypes.string.isRequired, // Ensure name is a required string
  price: PropTypes.number.isRequired, // Ensure price is a required number
};

export default ProductItem;
