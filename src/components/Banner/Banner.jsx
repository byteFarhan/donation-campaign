const Banner = () => {
  return (
    <div className="bg-[url('/banner.png'),_linear-gradient(#fffffff2,_#fffffff2)] space-y-10 bg-cover bg-blend-overlay py-40 ">
      <h1 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl">
        I Grow By Helping People In Need
      </h1>
      <div className="px-5 py-5 text-center rounded-md form-control ">
        <div className="mx-auto">
          <label className=" input-group">
            <input
              type="text"
              placeholder="Search here...."
              className="lg:w-[500px] px-2 py-3 border focus:outline-none"
            />

            <button className="font-medium bg-[#FF444A] text-white btn btn-ghost hover:bg-[#79C23F] delay-100 transition-colors ">
              Search
            </button>
          </label>
        </div>
        {/* <label className="mx-auto input-group">
          <input
            type="text"
            placeholder="Search here...."
            className="w-2/4 px-2 py-3 border border-primary focus:outline-none lg:w-1/4"
          />

          <button className="font-medium bg-[#FF444A] text-white btn btn-ghost hover:bg-[#79C23F] delay-100 transition-colors ">
            Search
          </button>
        </label> */}
      </div>
    </div>
  );
};

export default Banner;
