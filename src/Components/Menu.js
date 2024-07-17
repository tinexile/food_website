import React from "react";

const Menu = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto ">
        

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 my-16">
          <div className="   text-center col-span-4 ">
            <span className="bg-green-400 px-4 py-2 mt-4">Our Menu</span>
            <h1 className="text-3xl font-bold my-6 ">Explore Our Menu</h1>
          </div>

          <img
            src="https://imgs.search.brave.com/bpL8kvZUSJ0MJI7k8LyxgYOYIjmCC3m5TyPE5E6SwlM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/NjYvMzM0Mi81OTY1/L2ZpbGVzLzRaV09m/Wlh1U3pTOHI1Z3JE/MXlaNUZSaVpkbjZq/ekRDSkdGSjlYZnRf/MTAyNHgxMDI0X2Nv/cHlfYV8xMDI0eDEw/MjQuanBnP3Y9MTY2/MTg2MjUyNg"
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md col-span-2"
          />

          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md"
          />

          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md row-span-2"
          />

          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md"
          />
          <img
            src="https://media.istockphoto.com/id/1152493500/photo/authentic-indian-dishes-and-snacks.jpg?s=2048x2048&w=is&k=20&c=Dd28oVLiENf4XZz7c1SAL2n76t4LCRnkoHFH-mty5ss="
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md"
          />
          <img
            src="https://media.istockphoto.com/id/863442020/photo/traditional-indian-curry-with-rice.jpg?s=612x612&w=0&k=20&c=kPOilwUp800dxGE-ES_nVfyK2_LNnu9iOBiZqAlCm78="
            alt=""
            className=" hover:scale-105 duration-200 w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
