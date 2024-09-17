import React from "react";

const Page = ({ header, data }: { header: any; data: any }) => {
  return (
    <table className="">
      <thead className="">
        <tr>
          {header.map((e: any, i: number) => (
            <th key={i} scope="col" className="">
              {e}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((e: any, i: number) => (
          <tr className="" key={i}>
            {Object.keys(e).map((data, i) => {
              return e[data].type === "image" ? (
                <td className="">
                  <img src={e[data].url} alt="" />
                </td>
              ) : (
                <td className="">{e[data]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Page;
