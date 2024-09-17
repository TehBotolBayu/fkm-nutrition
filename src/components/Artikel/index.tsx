import React from "react";
import ArticleCard from "../Card/ArticleCard";
import SectionTitle from "../SectionTitle";
import NormalButton from "../Global/Button/NormalButton";
import { getBlogEntries } from "@/utils/contentful.tsx";
import { BlogQueryResult, blogTag } from "@/types";
import Banner from "@/components/Global/Banner";

export default function Artikel({
  blogEntries,
  head,
}: {
  blogEntries: BlogQueryResult;
  head: any;
}) {
  return (
    <section className="py-8 " id="artikel">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <Banner title={head} />
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              {blogEntries.items.map((singlePost, i) => {
                const { slug, title, date, content } = singlePost.fields;
                return (
                  <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
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
          </div>
        </section>
      </div>
    </section>
  );
}
