import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Detailes = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  // console.log(datas);
  // console.log(id);
  const data = datas.find((data) => data.id === parseInt(id));
  const { title, text_color, price, img, description } = data || {};
  const handleDonateBtn = () => {
    const donateItemsList = [];
    const donateItems = JSON.parse(localStorage.getItem("donateItems"));
    // console.log(donateItems);
    if (!donateItems) {
      donateItemsList.push(data);
      localStorage.setItem("donateItems", JSON.stringify(donateItemsList));
      swal(
        "Thank You.😍",
        "Your donation has been successfully added..",
        "success"
      );
    } else {
      const isExits = donateItems.find((items) => items.id === parseInt(id));
      // console.log(isExits);
      if (!isExits) {
        donateItemsList.push(data);
        localStorage.setItem("donateItems", JSON.stringify(donateItemsList));
        swal("Thank You.😍", "Your donation is successfully added.", "success");
      } else {
        swal("Thank You.😍", "Your donation has already been added.", "error");
      }
    }
  };

  return (
    <div className="px-5 my-10 md:px-10 lg:px-40">
      <div className="relative h-1/4">
        <img
          src={img}
          alt=""
          className="object-cover w-full lg:h-[750px] max-h-full mb-6 rounded-lg"
        />
        <div className="absolute w-full p-5 md:px-10 md:py-10 bottom-0 bg-gradient-to-r from-[#0b0b0b80] to-[#0b0b0b80] bgb ">
          <button
            onClick={handleDonateBtn}
            style={{ backgroundColor: text_color }}
            className="font-semibold text-white border-none rounded-md md:text-xl btn"
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-[40px] font-bold">{title}</h1>
        <p className="text-justify font-medium text-[#0b0b0bb3]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Detailes;
