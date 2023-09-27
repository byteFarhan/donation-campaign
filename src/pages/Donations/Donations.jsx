import { useState } from "react";
import Donation from "../../components/Donation/Donation";

const Donations = () => {
  const donatedItems = JSON.parse(localStorage.getItem("donateItems"));
  //   console.log(donatedItems);
  const [datas, setDatas] = useState(4);
  const handleShowAll = () => {
    setDatas(donatedItems.length);
  };
  return (
    <div>
      {!donatedItems ? (
        <p className=" h-[70vh] md:h-[80vh] flex justify-center items-center text-4xl font-bold">
          No donation yet...
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 px-5 my-10 gap-7 lg:grid-cols-2 md:px-10 lg:px-20">
            {donatedItems.slice(0, datas).map((item) => (
              <Donation key={item.id} data={item}></Donation>
            ))}
          </div>
          {donatedItems.length > 4 && (
            <div className={`my-10 text-center ${datas > 4 && "hidden"}`}>
              <button
                onClick={handleShowAll}
                className="btn text-white font-bold w-36 bg-[#009444] hover:bg-[#009400] delay-100 transition-colors"
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donations;
