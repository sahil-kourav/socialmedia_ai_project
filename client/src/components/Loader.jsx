import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50 ">
      <BounceLoader
        color="red"
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
