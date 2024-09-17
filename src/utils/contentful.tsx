import { createClient } from "contentful";
// import dotenv from "dotenv";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { useState } from "react";
import FullImage from "@/components/Global/FullImage";
import Link from "next/link";
// dotenv.config();

// const UList = ({ children }: { children: React.ReactNode }) => (
//   <ul
//     className="list-disc text-red-500 bg-red-500 border border-black
//     "
//   >
//     {children}
//   </ul>
// );
//  const OList = ({children}:{children: React.ReactNode}) => {
//   return (
//     <ol className="list-decimal">
//       {children}
//     </ol>
//   )
// }

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="font-bold text-3xl my-4 text-black">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="font-bold text-2xl my-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="font-bold text-xl my-2">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="font-bold text-lg my-2">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="font-bold text-base my-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h5 className="font-bold text-base my-2">{children}</h5>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return (
        <ul
          style={{
            listStyleType: "circle",
            listStylePosition: "inside",
          }}
        >
          {children}
        </ul>
      );
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return (
        <ul
          style={{
            listStyleType: "decimal",
            listStylePosition: "inside",
          }}
        >
          {children}
        </ul>
      );
    },
    // [BLOCKS.OL_LIST]: (node: any, children: any) =>
    //   <oList>{children}</oList>
    // ,
    [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <Link href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </Link>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      const [showFull, setshowFull] = useState(false);
      return (
        <>
          {showFull && (
            <FullImage
              src={`https://${node.data.target.fields.file.url}`}
              h={node.data.target.fields.file.details.image.height}
              w={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
              setshowFull={setshowFull}
            />
          )}
          {node.data.target.fields.file.contentType == "video/mp4" ? (
            <video controls>
              <source src={`https://${node.data.target.fields.file.url}`} />
            </video>
          ) : (
            <img
              onClick={() => setshowFull(!showFull)}
              className="cursor-pointer"
              src={`https://${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
            />
          )}
        </>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (children: any) => <span className="font-extrabold">{children}</span>,
  },
  renderText: (text: any) => text.replace("!", "?"),
};

// const client = createClient({
//   space: process.env.SPACE_ID as string,
//   accessToken: process.env.ACCESS_TOKEN as string,
// });

const client = createClient({
  space: "ntnopgihfcee",
  accessToken: "DCv_ad_5KuMdJERFLbaI6s8MpavhbZ2Fx-SsWtzbAlk",
});

const getBlogEntries = async (type: string) => {
  const entries = await client.getEntries({
    content_type: "artikel",
    "fields.type": type,
  });
  return entries;
};

const getBlogBySlug = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "artikel", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
      limit: 1,
      include: 10,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getGalleryBySlug = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "galeri", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
      limit: 1,
      include: 10,
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getInfoBySlug = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "informasidesa", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
      limit: 1,
      include: 10,
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getTableData = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "tableData", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
      limit: 1,
      include: 10,
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getInfoEntries = async () => {
  const entries = await client.getEntries({ content_type: "informasidesa" });
  return entries;
};

export {
  getBlogEntries,
  getBlogBySlug,
  getInfoEntries,
  renderOptions,
  getInfoBySlug,
  getGalleryBySlug,
  getTableData,
};
