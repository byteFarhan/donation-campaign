import Donation from "../../components/Donation/Donation";

const Donations = () => {
  const donatedItems = JSON.parse(localStorage.getItem("donateItems"));
  //   console.log(donatedItems);
  return (
    <div>
      {!donatedItems ? (
        <p className="h-[80vh] flex justify-center items-center text-4xl font-bold">
          No donation yet...
        </p>
      ) : (
        <div className="grid grid-cols-1 px-5 my-10 gap-7 lg:grid-cols-2 md:px-10 lg:px-20">
          {donatedItems.map((item) => (
            <Donation key={item.id} data={item}></Donation>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donations;
