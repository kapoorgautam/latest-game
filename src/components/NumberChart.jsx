// import React from "react";
// import Color from "./Color";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useLanguage } from "./LanguageContext";
// import { translations } from "../translator/translations";

// const NumberChart = () => {
//   const numberArr = JSON.parse(localStorage.getItem("numberArr")) || [];

//   const time =[ "Dhani ram", "Mansarovar", "Delhi bazaar","Sri ganesh",  "Faridabad", "Gajiyabad", "Gali", "Disawer"];



//   const { language } = useLanguage();
//   const prettifyDate = (i, parts) => {
//     const time = new Date("09-01-2024").getTime() + i * 3600 * 24 * 1000;
//     const date = new Date(time);
//     const options = { month: "short", day: "numeric" };

//     return date.toLocaleString("en-US", options);
//   };
//   const arrLen = Math.floor((numberArr?.length - 1) / 8) - 6
//   return (
//     <div>
//       <Navbar />
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "clamp(2rem, 2.5vw, 2rem)",
//           color: "white",

//         }}
//       >  {translations[language].btn2}</h1>
//       <div style={{ overflowY: "auto", textAlign: "center", fontSize: "clamp(1rem, 2.5vw, 1.5rem)"  }}>

//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "clamp(1rem, 2.5vw, 2rem)",
//           color: "white",}}
//       >October 2024</h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody style={{ textAlign: "center", color: "white" ,fontWeight: "bold",  fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }} >
//             {Array.from({
//               length: arrLen-30,
//             }).map((_, i) => (
//               <tr>
//                 <td>{prettifyDate(i+30, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td>
//                       {
//                         numberArr?.slice(53+30*8, numberArr?.length - 1)[
//                         i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>




//         <h1
//            style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
  
//           }}
//         >September 2024</h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody style={{ textAlign: "center", color: "white", fontWeight: "bold", }} >
//             {Array.from({
//               length: 30,
//             }).map((_, i) => (
//               <tr>
//                 <td>{prettifyDate(i, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td>
//                       {
//                         numberArr?.slice(53, numberArr?.length - 1)[
//                         i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>



        
      
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default NumberChart;



// import React from "react";
// import Color from "./Color";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useLanguage } from "./LanguageContext";
// import { translations } from "../translator/translations";

// const NumberChart = () => {
//   const numberArr = JSON.parse(localStorage.getItem("numberArr")) || [];

//   const time =[ "Dhani ram", "Mansarovar", "Delhi bazaar","Sri ganesh",  "Faridabad", "Gajiyabad", "Gali", "Disawer"];



//   const { language } = useLanguage();
//   const prettifyDate = (i, parts) => {
//     const time = new Date("09-01-2024").getTime() + i * 3600 * 24 * 1000;
//     const date = new Date(time);
//     const options = { month: "short", day: "numeric" };

//     return date.toLocaleString("en-US", options);
//   };
//   const arrLen = Math.floor((numberArr?.length - 1) / 8) - 6
//   return (
//     <div>
//       <Navbar />
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "clamp(2rem, 2.5vw, 2rem)",
//           color: "white",

//         }}
//       >  {translations[language].btn2}</h1>
//       <div style={{ overflowY: "auto", textAlign: "center", fontSize: "clamp(1rem, 2.5vw, 1.5rem)"  }}>

//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "clamp(1rem, 2.5vw, 2rem)",
//           color: "white",}}
//       >October 2024</h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody style={{ textAlign: "center", color: "white" ,fontWeight: "bold",  fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }} >
//             {Array.from({
//               length: arrLen-30,
//             }).map((_, i) => (
//               <tr>
//                 <td>{prettifyDate(i+30, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td>
//                       {
//                         numberArr?.slice(53+30*8, numberArr?.length - 1)[
//                         i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>




//         <h1
//            style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
  
//           }}
//         >September 2024</h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody style={{ textAlign: "center", color: "white", fontWeight: "bold", }} >
//             {Array.from({
//               length: 30,
//             }).map((_, i) => (
//               <tr>
//                 <td>{prettifyDate(i, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td>
//                       {
//                         numberArr?.slice(53, numberArr?.length - 1)[
//                         i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h1
//            style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
  
//           }}
//         >September 2024</h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody style={{ textAlign: "center", color: "white", fontWeight: "bold", }} >
//             {Array.from({
//               length: 30,
//             }).map((_, i) => (
//               <tr>
//                 <td>{prettifyDate(i, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td>
//                    {
//   numberArr?.slice(53 + (30 + 31) * 8, numberArr?.length - 1)[
//     i * 8 + ind
//   ]
// }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>



        
      
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default NumberChart;



// import React from "react";
// import Color from "./Color";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useLanguage } from "./LanguageContext";
// import { translations } from "../translator/translations";

// const NumberChart = () => {
//   const numberArr = JSON.parse(localStorage.getItem("numberArr")) || [];

//   const time = [
//     "Dhani ram",
//     "Mansarovar",
//     "Delhi bazaar",
//     "Sri ganesh",
//     "Faridabad",
//     "Gajiyabad",
//     "Gali",
//     "Disawer",
//   ];

//   const { language } = useLanguage();

//   const prettifyDate = (i, parts) => {
//     const time = new Date("09-01-2024").getTime() + i * 3600 * 24 * 1000;
//     const date = new Date(time);
//     const options = { month: "short", day: "numeric" };

//     return date.toLocaleString("en-US", options);
//   };

//   const arrLen = Math.floor((numberArr?.length - 1) / 8) - 6;

//   return (
//     <div>
//       <Navbar />

//       <div
//         style={{
//           overflowY: "auto",
//           textAlign: "center",
//           fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
//         }}
//       >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "clamp(2rem, 2.5vw, 2rem)",
//           color: "white",
//         }}
//       >
//         {translations[language].btn2}
//       </h1>
//        {/* November Section */}
//        <h1
//           style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
//           }}
//         >
//           November 2024
//         </h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody
//             style={{
//               textAlign: "center",
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {Array.from({
//               length: arrLen - 61, // Remaining days for November
//             }).map((_, i) => (
//               <tr key={i}>
//                 <td>{prettifyDate(i + 61, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td key={ind}>

//                       {/* you have change only in new month section  */}


                      
//                       {
//                         numberArr?.slice(
//                           53 + (30 + 31) * 8,
//                           numberArr?.length - 1
//                         )[i * 8 + ind]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>






     
//         {/* October Section */}
//         <h1
//           style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
//           }}
//         >
//           October 2024
//         </h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody
//             style={{
//               textAlign: "center",
//               color: "white",
//               fontWeight: "bold",
//               fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
//             }}
//           >
//             {Array.from({
//               length: 31, // October has 31 days
//             }).map((_, i) => (
//               <tr key={i}>
//                 <td>{prettifyDate(i + 30, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td key={ind}>
//                       {
//                         numberArr?.slice(53 + 30 * 8, 53 + (30 + 31) * 8)[
//                           i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* September Section */}
//         <h1
//           style={{
//             textAlign: "center",
//             fontSize: "clamp(1rem, 2.5vw, 2rem)",
//             color: "white",
//           }}
//         >
//           September 2024
//         </h1>
//         <table className="table table-hover table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Date</th>
//               {time.map((ele, i) => (
//                 <th scope="col" key={i}>
//                   {ele}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody
//             style={{
//               textAlign: "center",
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {Array.from({
//               length: 30,
//             }).map((_, i) => (
//               <tr key={i}>
//                 <td>{prettifyDate(i, 8)}</td>
//                 {Array.from({ length: 8 }).map((_, ind) => {
//                   return (
//                     <td key={ind}>
//                       {
//                         numberArr?.slice(53, 53 + 30 * 8)[
//                           i * 8 + ind
//                         ]
//                       }
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>

       
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default NumberChart;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translator/translations";

const NumberChart = () => {
  const numberArr = JSON.parse(localStorage.getItem("numberArr")) || [];

  const time = [
    "Dhani ram",
    "Mansarovar",
    "Delhi bazaar",
    "Sri ganesh",
    "Faridabad",
    "Gajiyabad",
    "Gali",
    "Disawer",
  ];

  const { language } = useLanguage();

  // Base date correction for alignment
  const baseDate = new Date(2024, 8, 1); // Sept 1, 2024 (JS months are 0-indexed)
  const today = new Date();

  // Calculate the correct offset for today
  const todayOffset = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));

  const prettifyDate = (offset) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + offset);
    return date.toLocaleString("en-US", { month: "short", day: "numeric" });
  };

  let months = [
    { name: "September 2024", days: 30, offset: 0 },
    { name: "October 2024", days: 31, offset: 30 },
    { name: "November 2024", days: 30, offset: 61 },
    { name: "December 2024", days: 31, offset: 91 },
    { name: "January 2025", days: 31, offset: 122 },
    { name: "February 2025", days: 28, offset: 153 },
    { name: "March 2025", days: 31, offset: 181 },
  ];

  // Find the current month index based on today's date
  const currentMonthIndex = months.findIndex((month) => {
    const startDate = new Date(baseDate);
    startDate.setDate(startDate.getDate() + month.offset);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + month.days - 1);
    return today >= startDate && today <= endDate;
  });

  // Reorder months so the current month appears first
  if (currentMonthIndex !== -1) {
    months = [...months.slice(currentMonthIndex), ...months.slice(0, currentMonthIndex)];
  }

  return (
    <div>
      <Navbar />
      <div style={{ overflowY: "auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 2.5vw, 2rem)", color: "white" }}>
          {translations[language].btn2}
        </h1>

        {months.map((month, index) => (
          <div key={index}>
            <h1 style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", color: "white" }}>{month.name}</h1>
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Date</th>
                  {time.map((ele, i) => (
                    <th scope="col" key={i}>{ele}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
                {Array.from({ length: month.days }).map((_, i) => {
                  const currentDate = prettifyDate(i + month.offset);
                  const isToday = todayOffset === i + month.offset;
                  
                  return (
                    <tr key={i} style={{ backgroundColor: isToday ? "#FFD700" : "transparent" }}>
                      <td>{currentDate}</td>
                      {Array.from({ length: 8 }).map((_, ind) => (
                        <td key={ind}>
                          {numberArr[53 + (i + month.offset - 2) * 8 + ind] || "-"}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NumberChart;
