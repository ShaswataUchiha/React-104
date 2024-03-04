import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] h-screen w-full overflow-hidden">
        {/* <div className="absolute top-[5%] w-full py-10 flex 
        justify-center text-zinc-400 font-semibold text-xl ">
          Ari
        </div> */}

        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[30vw] md:text-[25vw] lg:text-[20vw] leading-none tracking-tighter font-semibold text-zinc-600">
          Notes
        </h1>
      </div>
    </>
  );
};

export default Background;
