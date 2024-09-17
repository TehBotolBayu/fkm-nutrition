import React from "react";
import Meter from "../Global/Meter";
import Card from "../Global/Card";

const Page = ({ imtval , kategori, cal  }:{ imtval :any, kategori:any, cal:any  }) => {
  
  return (
    <div>
      <Card options={"bg-black"}>
        <h1 className="text-white text-2xl my-5">Hasil Perhitungan</h1>
        <Meter level={kategori} />
        <h1 className="text-white text-5xl my-5">{imtval}</h1>
      </Card>
    </div>
  );
};

export default Page;
