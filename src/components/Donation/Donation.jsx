import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ data }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: data.background_color }}
        className="relative flex flex-col w-full rounded-lg md:flex-row "
      >
        <div className="relative w-full m-0 overflow-hidden md:w-2/5 shrink-0 md:rounded-l-lg bg-clip-border">
          <img
            src={data.img}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <span
            style={{
              backgroundColor: data.category_bg_color,
              color: data.text_color,
            }}
            className="px-2 py-1 text-sm font-medium rounded"
          >
            {data.category}
          </span>
          <h1 className="my-2 text-2xl font-semibold">{data.title}</h1>
          <p style={{ color: data.text_color }} className="font-semibold">
            ${data.price}
          </p>
          <Link to={`/detailes/${data.id}`}>
            <button
              style={{ backgroundColor: data.text_color }}
              className="my-3 text-white btn "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Donation;
