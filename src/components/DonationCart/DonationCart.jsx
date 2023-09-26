import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const DonationCart = ({ donationCart }) => {
  //   console.log(donationCart);
  const {
    id,
    title,
    background_color,
    text_color,
    img,
    category_bg_color,
    category,
  } = donationCart || {};
  //   console.log(background_color);
  const navigate = useNavigate();
  // console.log(navigate);
  const handleDetailes = () => {
    navigate(`/detailes/${id}`);
  };
  return (
    <>
      <div
        onClick={handleDetailes}
        style={{ backgroundColor: background_color, color: text_color }}
        className={` border-gray-200 rounded-lg pb-5 `}
      >
        <img
          className="object-cover w-full mb-4 rounded-t-lg"
          src={img}
          alt=""
        />
        <div className="px-4 space-y-2">
          {/* <h3 className={`text-sm font-semibold bg-[${category_bg_color}]`}> */}
          <span
            style={{ backgroundColor: category_bg_color }}
            className="py-[2px] px-2 rounded font-semibold"
          >
            {category}
          </span>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </>
  );
};

DonationCart.propTypes = {
  donationCart: PropTypes.object.isRequired,
};
export default DonationCart;
