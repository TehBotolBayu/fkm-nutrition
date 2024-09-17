import React from "react";

const SectionTitle = ({text, opt}:{text:string, opt:string | undefined}) => {
  return (
    <>
      <h2 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 ${opt}`}>
        {text}
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
    </>
  );
};

export default SectionTitle;
