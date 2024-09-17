import React from "react";

const Page = ({
  src,
  h,
  w,
  alt,
  setshowFull,
}: {
  src: string;
  h: string | number | undefined;
  w: string | number | undefined;
  alt: string;
  setshowFull: any;
}) => {
  return (
    <div
      className="z-50 fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center"
      onClick={() => setshowFull((p:any) => !p)}
    >
      <div>
        <img src={src} height={h} width={w} alt={alt} />
      </div>
    </div>
  );
};

export default Page;
