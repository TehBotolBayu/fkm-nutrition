import React, { useRef } from "react";

export default function Page() {
  // const contentA = useRef();
  // const contentB = useRef();
  // const contentC = useRef();
  // const iconA = useRef();
  // const iconB = useRef();
  // const iconC = useRef();
  // function toggleAccordion(index) {
  //   let icon;
  //   let content = null;
  //   if (index == 1) {
  //     content = contentA.current;
  //     icon = iconA.current;
  //   } else if (index == 2) {
  //     content = contentB.current;
  //     icon = iconB.current;
  //   } else if (index == 3) {
  //     content = contentC.current;
  //     icon = iconC.current;
  //   }
  //   console.log(content);
  //   // SVG for Minus icon
  //   const minusSVG = `
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
  //       <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
  //     </svg>
  //   `;
  //   // SVG for Plus icon
  //   const plusSVG = `
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
  //       <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  //     </svg>
  //   `;
  //   // Toggle the content's max-height for smooth opening and closing
  //   if (content.style.maxHeight && content.style.maxHeight !== "0px") {
  //     console.log(content);
  //     content.style.maxHeight = "0";
  //     icon.innerHTML = plusSVG;
  //   } else {
  //     content.style.maxHeight = content.scrollHeight + "px";
  //     icon.innerHTML = minusSVG;
  //   }
  // }
  // return (
  //   <>
  //     <>
  //       {/* Accordion Item 1 */}
  //       <div className="border-b border-slate-200">
  //         <button
  //           onClick={toggleAccordion(1)}
  //           className="w-full flex justify-between items-center py-5 text-slate-800"
  //         >
  //           <span>What is Material Tailwind?</span>
  //           <span
  //             ref={iconA}
  //             id="icon-1"
  //             className="text-slate-800 transition-transform duration-300"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 16 16"
  //               fill="currentColor"
  //               className="w-4 h-4"
  //             >
  //               <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  //             </svg>
  //           </span>
  //         </button>
  //         <div
  //           ref={contentA}
  //           id="content-1"
  //           className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
  //         >
  //           <div className="pb-5 text-sm text-slate-500">
  //             Material Tailwind is a framework that enhances Tailwind CSS with
  //             additional styles and components.
  //           </div>
  //         </div>
  //       </div>
  //       {/* Accordion Item 2 */}
  //       <div className="border-b border-slate-200">
  //         <button
  //           onClick={toggleAccordion(2)}
  //           className="w-full flex justify-between items-center py-5 text-slate-800"
  //         >
  //           <span>How to use Material Tailwind?</span>
  //           <span
  //             ref={iconB}
  //             id="icon-2"
  //             className="text-slate-800 transition-transform duration-300"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 16 16"
  //               fill="currentColor"
  //               className="w-4 h-4"
  //             >
  //               <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  //             </svg>
  //           </span>
  //         </button>
  //         <div
  //           ref={contentB}
  //           id="content-2"
  //           className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
  //         >
  //           <div className="pb-5 text-sm text-slate-500">
  //             You can use Material Tailwind by importing its components into
  //             your Tailwind CSS project.
  //           </div>
  //         </div>
  //       </div>
  //       {/* Accordion Item 3 */}
  //       <div className="border-b border-slate-200">
  //         <button
  //           onClick={toggleAccordion(3)}
  //           className="w-full flex justify-between items-center py-5 text-slate-800"
  //         >
  //           <span>What can I do with Material Tailwind?</span>
  //           <span
  //             ref={iconC}
  //             id="icon-3"
  //             className="text-slate-800 transition-transform duration-300"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 16 16"
  //               fill="currentColor"
  //               className="w-4 h-4"
  //             >
  //               <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  //             </svg>
  //           </span>
  //         </button>
  //         <div
  //           ref={contentC}
  //           id="content-3"
  //           className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
  //         >
  //           <div className="pb-5 text-sm text-slate-500">
  //             Material Tailwind allows you to quickly build modern, responsive
  //             websites with a focus on design.
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   </>
  // );
}
