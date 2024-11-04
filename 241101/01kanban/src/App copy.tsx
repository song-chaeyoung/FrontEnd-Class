import React from "react";
// import { createGlobalStyle } from "styled-components";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { hourSelector, minuteState } from "./atoms";

// const GlobalStyle = createGlobalStyle`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// ul, li {
//   list-style: none;
// }

// a {
//   text-decoration: none;
//   color: inherit;
// }

// body {
//   /* background: ${({ theme }) => theme.bgColor} ; */
// }
// `;

// const App = () => {
//   const [hour, setHour] = useRecoilState(hourSelector);
//   const [minutes, setMinutes] = useRecoilState(minuteState);

//   const onMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMinutes(+e.currentTarget.value);
//   };
//   const onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setHour(+e.currentTarget.value);
//   };

//   return (
//     <div>
//       <GlobalStyle />
//       <div>
//         <input
//           type="number"
//           placeholder="Minutes"
//           value={minutes}
//           onChange={onMinutesChange}
//         />
//         <input
//           type="number"
//           onChange={onHoursChange}
//           value={hour}
//           placeholder="Hours"
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
