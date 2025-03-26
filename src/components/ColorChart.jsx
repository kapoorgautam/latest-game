// // 


// // ColorChart.jsx
// import React from "react";
// import { useLanguage } from "./LanguageContext";
// import { translations } from "../translator/translations";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Color from "./Color";
// import {
//   Box,
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from "@mui/material";

// const ColorChart = () => {
//   const colorArr = JSON.parse(localStorage.getItem("colorArr")) || [];
//   const time2 = ["2 PM", "3 PM"];
//   const { language } = useLanguage();

//   const prettifyDate = (i) => {
//     const baseDate = new Date("09-01-2024");
//     const time = baseDate.getTime() + i * 3600 * 24 * 1000;
//     const date = new Date(time);
//     const options = { month: "short", day: "numeric" };
//     return date.toLocaleString("en-US", options);
//   };

//   const octoberRows = 31;
//   const septemberRows = 30;
//   const novemberRows = 30; // Adjust if there are fewer or more days
//   const decemberRows = 31; // Adjust if there are fewer or more days

//   return (
//     <>
//       <Navbar />
//       <Box
//         sx={{
//           maxWidth: "1500px",
//           margin: "0 auto",
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           style={{
//             textAlign: "center",
//             fontSize: "3rem",
//             color: "white",
//           }}
//         >
//           {translations[language].btn1}
//         </Typography>





//         {/* November Table */}
//         <h1>November 2024</h1>
//         <TableContainer
//           component={Paper}
//           sx={{
//             overflowY: "auto",
//             marginTop: 1,
//             boxShadow: 3,
//           }}
//         >
//           <Table stickyHeader aria-label="color chart table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     backgroundColor: "#32383E",
//                     color: "white",
//                     fontWeight: "bold",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 1,
//                   }}
//                 >
//                   Date
//                 </TableCell>
//                 {time2.map((ele, i) => (
//                   <TableCell
//                     key={i}
//                     sx={{
//                       backgroundColor: "#32383E",
//                       color: "white",
//                       fontWeight: "bold",
//                       position: "sticky",
//                       top: 0,
//                       zIndex: 1,
//                     }}
//                     align="center"
//                   >
//                     {ele}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.from({ length: novemberRows}).map((_, i) => (
//                 <TableRow key={i}>
//                   <TableCell
//                     component="th"
//                     scope="row"
//                     sx={{ fontWeight: "bold" }}
//                   >
//                     {prettifyDate(i + 61, 4)} {/* Offset for November dates */}
//                   </TableCell>
//                   {Array.from({ length: 2 }).map((_, ind) => (
//                     <TableCell key={ind} align="center">
//                       <Color
//                         colour={
//                           colorArr.slice(40 + 61 * 4, colorArr.length - 7 - 16)[i * 4 + ind + 3]
//                         }
//                       />
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>






//         {/* October Table */}
//         <h1>October 2024</h1>
//         <TableContainer
//           component={Paper}
//           sx={{
//             overflowY: "auto",
//             marginTop: 1,
//             boxShadow: 3,
//           }}
//         >
//           <Table stickyHeader aria-label="color chart table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     backgroundColor: "#32383E",
//                     color: "white",
//                     fontWeight: "bold",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 1,
//                   }}
//                 >
//                   Date
//                 </TableCell>
//                 {time2.map((ele, i) => (
//                   <TableCell
//                     key={i}
//                     sx={{
//                       backgroundColor: "#32383E",
//                       color: "white",
//                       fontWeight: "bold",
//                       position: "sticky",
//                       top: 0,
//                       zIndex: 1,
//                     }}
//                     align="center"
//                   >
//                     {ele}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.from({ length: octoberRows }).map((_, i) => (
//                 <TableRow key={i}>
//                   <TableCell
//                     component="th"
//                     scope="row"
//                     sx={{ fontWeight: "bold" }}
//                   >
//                     {prettifyDate(i + 30, 4)}
//                   </TableCell>
//                   {Array.from({ length: 2 }).map((_, ind) => (
//                     <TableCell key={ind} align="center">
//                       <Color
//                         colour={
//                           colorArr.slice(40 + 30 * 4, colorArr.length - 7 - 16)[i * 4 + ind + 3]
//                         }
//                       />
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* September Table */}
//         <h1>September 2024</h1>
//         <TableContainer
//           component={Paper}
//           sx={{
//             overflowY: "auto",
//             marginTop: 1,
//             boxShadow: 3,
//           }}
//         >
//           <Table stickyHeader aria-label="color chart table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     backgroundColor: "#32383E",
//                     color: "white",
//                     fontWeight: "bold",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 1,
//                   }}
//                 >
//                   Date
//                 </TableCell>
//                 {time2.map((ele, i) => (
//                   <TableCell
//                     key={i}
//                     sx={{
//                       backgroundColor: "#32383E",
//                       color: "white",
//                       fontWeight: "bold",
//                       position: "sticky",
//                       top: 0,
//                       zIndex: 1,
//                     }}
//                     align="center"
//                   >
//                     {ele}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.from({ length: septemberRows }).map((_, i) => (
//                 <TableRow key={i}>
//                   <TableCell
//                     component="th"
//                     scope="row"
//                     sx={{ fontWeight: "bold" }}
//                   >
//                     {prettifyDate(i, 4)}
//                   </TableCell>
//                   {Array.from({ length: 2 }).map((_, ind) => (
//                     <TableCell key={ind} align="center">
//                       <Color
//                         colour={
//                           colorArr.slice(40, colorArr.length - 7 - 16)[i * 4 + ind + 3]
//                         }
//                       />
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* November Table */}
//         <h1>November 2024</h1>
//         <TableContainer
//           component={Paper}
//           sx={{
//             overflowY: "auto",
//             marginTop: 1,
//             boxShadow: 3,
//           }}
//         >
//           <Table stickyHeader aria-label="color chart table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     backgroundColor: "#32383E",
//                     color: "white",
//                     fontWeight: "bold",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 1,
//                   }}
//                 >
//                   Date
//                 </TableCell>
//                 {time2.map((ele, i) => (
//                   <TableCell
//                     key={i}
//                     sx={{
//                       backgroundColor: "#32383E",
//                       color: "white",
//                       fontWeight: "bold",
//                       position: "sticky",
//                       top: 0,
//                       zIndex: 1,
//                     }}
//                     align="center"
//                   >
//                     {ele}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.from({ length: novemberRows }).map((_, i) => (
//                 <TableRow key={i}>
//                   <TableCell
//                     component="th"
//                     scope="row"
//                     sx={{ fontWeight: "bold" }}
//                   >
//                     {prettifyDate(i + 61, 4)} {/* Offset for November dates */}
//                   </TableCell>
//                   {Array.from({ length: 2 }).map((_, ind) => (
//                     <TableCell key={ind} align="center">
//                       <Color
//                         colour={
//                           colorArr.slice(40 + 61 * 4, colorArr.length - 7 - 16)[i * 4 + ind + 3]
//                         }
//                       />
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default ColorChart;



// // ColorChart.jsx
// import React from "react";
// import { useLanguage } from "./LanguageContext";
// import { translations } from "../translator/translations";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Color from "./Color";
// import {
//   Box,
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from "@mui/material";

// const ColorChart = () => {
//   const colorArr = JSON.parse(localStorage.getItem("colorArr")) || [];
//   const time2 = ["2 PM", "3 PM"];
//   const { language } = useLanguage();

//   const prettifyDate = (i) => {
//     const baseDate = new Date("09-01-2024");
//     const time = baseDate.getTime() + i * 3600 * 24 * 1000;
//     const date = new Date(time);
//     const options = { month: "short", day: "numeric" };
//     return date.toLocaleString("en-US", options);
//   };

//   // Row counts for each month (number of days in each month)
//   const months = [
//     { name: "September 2024", days: 30, offset: 0 },  // September 2024
//     { name: "October 2024", days: 31, offset: 30 },   // October 2024
//     { name: "November 2024", days: 30, offset: 61 },  // November 2024
//     { name: "December 2024", days: 31, offset: 91 },  // December 2024
//     { name: "January 2025", days: 31, offset: 122 },  // January 2025
//     { name: "February 2025", days: 28, offset: 153 }, // February 2025 (Non-leap year)
//     { name: "March 2025", days: 31, offset: 181 },    // March 2025
//   ];

//   return (
//     <>
//       <Navbar />
//       <Box
//         sx={{
//           maxWidth: "1500px",
//           margin: "0 auto",
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           style={{
//             textAlign: "center",
//             fontSize: "3rem",
//             color: "white",
//           }}
//         >
//           {translations[language].btn1}
//         </Typography>

//         {/* Loop through the months and generate tables */}
//         {months.map((month, index) => (
//           <div key={index}>
//             <h1>{month.name}</h1>
//             <TableContainer
//               component={Paper}
//               sx={{
//                 overflowY: "auto",
//                 marginTop: 1,
//                 boxShadow: 3,
//               }}
//             >
//               <Table stickyHeader aria-label="color chart table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell
//                       sx={{
//                         backgroundColor: "#32383E",
//                         color: "white",
//                         fontWeight: "bold",
//                         position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       Date
//                     </TableCell>
//                     {time2.map((ele, i) => (
//                       <TableCell
//                         key={i}
//                         sx={{
//                           backgroundColor: "#32383E",
//                           color: "white",
//                           fontWeight: "bold",
//                           position: "sticky",
//                           top: 0,
//                           zIndex: 1,
//                         }}
//                         align="center"
//                       >
//                         {ele}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {Array.from({ length: month.days }).map((_, i) => (
//                     <TableRow key={i}>
//                       <TableCell
//                         component="th"
//                         scope="row"
//                         sx={{ fontWeight: "bold" }}
//                       >
//                         {prettifyDate(i + month.offset)} {/* Offset based on the month */}
//                       </TableCell>
//                       {Array.from({ length: 2 }).map((_, ind) => (
//                         <TableCell key={ind} align="center">
//                           <Color
//                             colour={
//                               colorArr.slice(
//                                 40 + month.offset * 4, 
//                                 colorArr.length - 7 - 16
//                               )[i * 4 + ind + 3]
//                             }
//                           />
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </div>
//         ))}

//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default ColorChart;


import React from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translator/translations";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Color from "./Color";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const ColorChart = () => {
  const colorArr = JSON.parse(localStorage.getItem("colorArr")) || [];
  const time2 = ["2 PM", "3 PM"];
  const { language } = useLanguage();

  const prettifyDate = (i) => {
    const baseDate = new Date("09-01-2024");
    const time = baseDate.getTime() + i * 3600 * 24 * 1000;
    const date = new Date(time);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleString("en-US", options);
  };

  // Define all months including offsets
  let months = [
    { name: "September 2024", days: 30, offset: 0 },
    { name: "October 2024", days: 31, offset: 30 },
    { name: "November 2024", days: 30, offset: 61 },
    { name: "December 2024", days: 31, offset: 91 },
    { name: "January 2025", days: 31, offset: 122 },
    { name: "February 2025", days: 28, offset: 153 },
    { name: "March 2025", days: 31, offset: 181 },
  ];

  // Get current date and determine the active month
  const today = new Date();
  const currentMonthIndex = months.findIndex((month, index) => {
    const startDate = new Date("09-01-2024");
    startDate.setDate(startDate.getDate() + month.offset);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + month.days);
    return today >= startDate && today <= endDate;
  });

  if (currentMonthIndex !== -1) {
    // Reorder months so that the current month is first
    months = [...months.slice(currentMonthIndex), ...months.slice(0, currentMonthIndex)];
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: "1500px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "white",
          }}
        >
          {translations[language].btn1}
        </Typography>

        {/* Loop through the months and generate tables */}
        {months.map((month, index) => (
          <div key={index}>
            <h1>{month.name}</h1>
            <TableContainer
              component={Paper}
              sx={{
                overflowY: "auto",
                marginTop: 1,
                boxShadow: 3,
              }}
            >
              <Table stickyHeader aria-label="color chart table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "#32383E",
                        color: "white",
                        fontWeight: "bold",
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      Date
                    </TableCell>
                    {time2.map((ele, i) => (
                      <TableCell
                        key={i}
                        sx={{
                          backgroundColor: "#32383E",
                          color: "white",
                          fontWeight: "bold",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                        align="center"
                      >
                        {ele}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from({ length: month.days }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {prettifyDate(i + month.offset)}
                      </TableCell>
                      {Array.from({ length: 2 }).map((_, ind) => (
                        <TableCell key={ind} align="center">
                          <Color
                            colour={
                              colorArr.slice(
                                40 + month.offset * 4,
                                colorArr.length - 7 - 16
                              )[i * 4 + ind + 3]
                            }
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default ColorChart;
