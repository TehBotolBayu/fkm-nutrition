import { kependudukan, kependudukanData } from "@/constant/table";
import React from "react";
import TableComponent from "@/components/TableComponent";
import { getTableData } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Page = ({ data }: { data: any }) => {
  return (
    <div className="py-24 bg-gray-100">
      <div className="relative overflow-x-auto sm:rounded-lg w-full max-w-2xl mx-auto border-none">
        <h1 className="my-4 text-black text-xl text-center">
          Data Kependudukan
        </h1>
        <TableComponent
          header={kependudukanData.header}
          data={kependudukanData.content}
        />
        <h1 className="my-4 text-black text-xl text-center">Data Pekerjaan</h1>
        {/* <TableComponent header={kependudukan.header} data={kependudukan.content} /> */}
        {documentToReactComponents(data.items[0].fields.content)}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  // const slug = context.params.slug;
  const datapenduduk: any = await getTableData("datapenduduk");

  return {
    props: {
      data: datapenduduk,
      // blog: blog.items[0],
      // title: blog.items[0].fields.title,
      // cover: blog.items[0].fields?.cover?.fields.file.url || "",
    },
  };
}

export default Page;
