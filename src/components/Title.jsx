import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-black-300">
        {text1} <span className="text-black-300 font-medium">{text2}</span>
      </p>
    </div>
  );
};

// PropTypes validation
Title.propTypes = {
  text1: PropTypes.string.isRequired, // Ensure text1 is a required string
  text2: PropTypes.string.isRequired, // Ensure text2 is a required string
};

export default Title;
