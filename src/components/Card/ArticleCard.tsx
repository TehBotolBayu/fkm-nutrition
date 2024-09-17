// import NormalButton from "../Global/Button/NormalButton";

import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks";

const ArticleCard = ({
  image,
  title,
  desc,
  url,
  content,
}: {
  image: string;
  title: string;
  desc: string;
  url: string;
  content: any;
}) => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`transition-all ease-out duration-1000
                  ${
                    isVisible1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }
                  `}
    >
      <Link className="w-full px-4 md:w-1/2 lg:w-1/3 text-left" href={url}>
        <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
          <div className="mb-8 overflow-hidden rounded-[5px]">
            <div className="block">
              <Image
                src={"https:" + image}
                width={100}
                height={100}
                alt="image"
                className="w-full h-48 object-cover object-center transition group-hover:rotate-6 group-hover:scale-125"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
              {desc}
            </span>
            <h3>
              <div className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                {title}
              </div>
            </h3>
            <p className="truncate ... max-w-[370px] text-base text-body-color dark:text-dark-6">
              {documentToPlainTextString(content)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
