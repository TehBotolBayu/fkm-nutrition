import TableComponent from "@/components/TableComponent";
import { pejabat } from "@/constant/table";
import React from "react";

const Page = () => {
  return (
    <div className="py-24 bg-gray-100">
      <div className="relative overflow-x-auto sm:rounded-lg w-full max-w-2xl mx-auto border-none">
        <h1 className="my-4 text-black text-xl text-center">
          Data Pejabat Pemerintahan
        </h1>
        <TableComponent header={pejabat.header} data={pejabat.content} />
      </div>
    </div>
  );
};

export default Page;
