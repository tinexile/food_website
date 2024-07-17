import React from "react";

const Section = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto   grid grid-cols-1 sm:grid-cols-3 gap-8 my-16">
        {/* 1st Section */}
        <div className=" mx-auto  flex max-w-[300px] gap-2">
          <img
            src="https://img.freepik.com/free-vector/sale-banner-sticker-blank-vector-shopping-clipart-set_53876-136212.jpg?t=st=1711699972~exp=1711703572~hmac=018c4d310a34efef391cefadf4f5a1b45f106784260b1cc2b41a3de30fda5588&w=740"
            alt=""
            className="h-[80px] rounded-full"
          />
          <div>
            <h1 className="font-bold">Discount Voucher</h1>
            <p className="text-gray-500">
              Cette discussion mêlant sujets sérieux et blagues a été inter
            </p>
          </div>
        </div>

        {/* 2nd section */}
        <div className=" mx-auto  flex max-w-[300px] gap-2">
          <img
            src="https://img.freepik.com/free-vector/flat-design-world-food-day_23-2148297481.jpg?t=st=1711700585~exp=1711704185~hmac=7139a87089e280ee5f83f3bea01325ce2d4fcd70763bd933f5e8e819735b6777&w=740"
            alt=""
            className="h-[80px] rounded-full"
          />
          <div>
            <h1 className="font-bold">Free healthy Food</h1>
            <p className="text-gray-500">
              Cette discussion mêlant sujets sérieux et blagues a été inter
            </p>
          </div>
        </div>

        {/* 3rd section */}

        <div className=" mx-auto  flex max-w-[300px] gap-2">
          <img
            src="https://img.freepik.com/free-vector/pizza-delivery-man-with-scooter-helmet_23-2147678650.jpg?t=st=1711700633~exp=1711704233~hmac=0f9047c0b3f3d07b6cd21abe90c798e209418ed6b1a3f0db6d46496b3885caa5&w=740"
            alt=""
            className="h-[80px] rounded-full"
          />
          <div>
            <h1 className="font-bold">Fast Food Delivery</h1>
            <p className="text-gray-500">
              Cette discussion mêlant sujets sérieux et blagues a été inter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
