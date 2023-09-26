import { useLoaderData, useParams } from "react-router-dom";

const Detailes = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  // console.log(datas);
  // console.log(id);
  const {
    title,
    background_color,
    text_color,
    price,
    img,
    description,
    category_bg_color,
    category,
  } = datas.find((data) => data.id === parseInt(id));

  return (
    <div className="px-5 my-10 md:px-10 lg:px-40">
      <div className=" h-1/4">
        <img
          src={img}
          alt=""
          className="object-cover w-full lg:h-[750px] max-h-full mb-6 rounded-lg"
        />
        <div className="relative bottom-0 bg-gradient-to-r from-[#0b0b0b80] to-[#0b0b0b80] bgb ">
          <button
            style={{ backgroundColor: text_color }}
            className="text-xl font-medium text-white rounded-md btn"
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-[40px] font-bold">{title}</h1>
        <p className="text-justify text-[#0b0b0bb3]">{description}</p>
      </div>
    </div>
  );
};

export default Detailes;
