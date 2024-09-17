import { getInfoEntries, renderOptions } from "@/utils/contentful.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import util from "util";
import React from "react";

const Page = ({ content }: { content: any }) => {
  return (
    <div className="bg-[#f8fafc] w-full text-black mt-0">
      <div className="flex min-h-screen flex-col p-24 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
        <h1 className="text-center">Informasi Kelurahan Loa Ipuh</h1>
        {content.items
          .slice(0)
          .reverse()
          .map((e: any, i: number) => {
            return (
              <div key={i}>
                <div className="flex min-h-screen flex-col lg:p-24 p-4 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
                  <h1>{e.fields.title}</h1>

                  {documentToReactComponents(e.fields.content, renderOptions)}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;

export async function getStaticProps(context: any) {
  const content: any = await getInfoEntries();
  return {
    props: {
      content,
    },
    revalidate: 10,
  };
}
