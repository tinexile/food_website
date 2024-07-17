import React from "react";

const Heroes = () => {
  return (
    <div className=" mt-16 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-10 relative top-[10%]">
     
      <img
        src="https://img.freepik.com/free-photo/poke-bowl-with-rice-salmoncucumbermangoonionwakame-salad-poppy-seeds-ands-sunflowers-seeds_123827-22754.jpg?t=st=1711698640~exp=1711702240~hmac=56bdff059a8acadf979bea5e0ac23c07c4ad1d15b88350fe00667eabb4cdc3ab&w=900"
        alt=""
        className="max-w-[500px]"
      />

      <div className=" text-center">
        <button className="bg-green-600 px-3 py-2 rounded-md text-white ">
          50% of on All Products
        </button>
        <h1 className="text-5xl mt-6">Enjoy Your Delicious Food</h1>
        <p className="mt-6">
          Cette discussion mêlant sujets sérieux et blagues a été interrompue à
          plusieurs reprises par des cris de soutien à la Palestine
        </p>
        <button className="bg-yellow-400 px-6 py-2 mt-6 rounded-md ">
          Explore Me
        </button>
      </div>

    </div>
  );
};

export default Heroes;
