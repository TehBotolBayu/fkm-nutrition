import { BlogQueryResult, blogTag } from "@/types";
import React from "react";
import { getBlogEntries } from "@/utils/contentful.tsx";
import Artikel from "@/components/Artikel";
// import { blogTag } from "@/types";
import Banner from "@/components/Global/Banner";

const blogTagData : any = {
  artikel : "Artikel",
  kegiatan : "Kegiatan",
  video : "Video",
  galeri : "Galeri",
}

export default function Home({
  blogEntries,
  tag,
}: {
  blogEntries: BlogQueryResult;
  tag: string;
}) {
  // console.log("blogTag", blogTag[tag.toString().toLowerCase()]);
  return (
    <article className="flex min-h-screen bg-white flex-col p-2 py-24 lg:p-24 gap-y-8">
      <Artikel
        blogEntries={blogEntries}
        head={blogTagData[tag?.toString().toLowerCase()]   || "Artikel" }
      />
    </article>
  );
}

export async function getServerSideProps(context:any) {
  const { query } = context;
  const tag = query.tag;
  const blogEntries = await getBlogEntries(tag);

  return {
    props: {
      blogEntries,
      tag,
    },
  };
}
