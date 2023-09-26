import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";

const DonationCarts = () => {
  const [donationCarts, setDonationCarts] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDonationCarts(data));
  }, []);

  // console.log(donationCarts);
  return (
    <>
      <div className="grid grid-cols-1 gap-5 px-10 my-10 lg:my-20 lg:gap-7 md:grid-cols-2 lg:grid-cols-4 lg:px-20 md:px-16">
        {donationCarts.map((donationCart) => (
          <DonationCart
            key={donationCart.id}
            donationCart={donationCart}
          ></DonationCart>
        ))}
      </div>
    </>
  );
};

export default DonationCarts;
