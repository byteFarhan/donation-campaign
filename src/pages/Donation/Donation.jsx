const Donation = () => {
  const data = {
    id: 12,
    title: "Educational Enrichment",
    img: "https://i.ibb.co/Rh6jtq9/Education.png",
    category: "Education",
    background_color: "#ff444a26",
    text_color: "#FF444A",
    category_bg_color: "#ff444a33",
    price: 14.99,
    description:
      "Unlock your potential with educational resources in our Education category. Discover a wealth of knowledge in various formats, from courses to books, designed to guide your personal and professional growth. Empower yourself today!",
  };
  return (
    <div>
      <div
        style={{ backgroundColor: data.background_color }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-lg  text-gray-700 "
      >
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
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
          <button
            style={{ backgroundColor: data.text_color }}
            className="my-3 text-white btn "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
