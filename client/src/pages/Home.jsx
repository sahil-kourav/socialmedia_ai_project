import React from "react";
import LanguageDropdown from "../components/LanguageDropdown";
import ImageUploder from "../components/ImageUploder";

const Home = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-center">
        <h1 className="font-bold tetx-[#34495E] text-xl mt-5 sm:text-3xl md:text-5xl lg:text-6xl">
          Ai Image Caption Generator
        </h1>
      </div>
      <div>
        <ImageUploder />
      </div>
    </div>
  );
};

export default Home;
