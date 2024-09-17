import React from "react";
import ArticleCard from "../../Card/ArticleCard";
import SectionTitle from "../../SectionTitle";
import NormalButton from "../../Global/Button/NormalButton";
import { getBlogEntries } from "@/utils/contentful.tsx";
import { BlogQueryResult } from "@/types";

export default function Artikel({
  blogEntries,
}: {
  blogEntries: BlogQueryResult;
}) {
  return (
    <section className="bg-gray-100 py-8" id="artikel">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <SectionTitle text="Artikel" opt={undefined} />
        <div className="mt-14 flex flex-wrap">
          {blogEntries.items.map((singlePost) => {
            const { slug, title, date, content } = singlePost.fields;
            return (
              <div key={slug} className="w-full md:w-1/3 p-2">
                <ArticleCard
                  image={
                    singlePost.fields?.cover?.fields?.file.url
                      ? singlePost.fields?.cover?.fields?.file.url
                      : "https://picsum.photos/400/200"
                  }
                  title={title}
                  desc={new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  url={`/${slug}`}
                  content={content}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <NormalButton
            text={"Selengkapnya"}
            action={() => (location.href = "artikel")}
          />
        </div>
      </div>
    </section>
  );
}
