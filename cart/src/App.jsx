import React from "react";
import { Routes, Route } from "react-router-dom";
import CardList from "./CardList";
import CardDetails from "./CardDetails";



const data = [
  { id: 1, title: "Card 1", description: "This is card 1" },
  { id: 2, title: "Card 2", description: "This is card 2" },
  { id: 3, title: "Card 3", description: "This is card 3" },
  { id: 4, title: "Card 4", description: "This is card 4" },
  { id: 5, title: "Card 5", description: "This is card 5" },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList data={data} />} />
      <Route path="/card/:id" element={<CardDetails data={data} />} />
    </Routes>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CardProvider } from "./CardContext";
// import CardList from "./CardList";
// import CardDetails from "./CardDetails";

// function App() {
//   return (
//     <CardProvider>
//         <div style={{ padding: "20px" }}>
//           <h1>Card Example</h1>
//           <Routes>
//             <Route path="/" element={<CardList />} />
//             <Route path="/card/:id" element={<CardDetails />} />
//           </Routes>
//         </div>
//     </CardProvider>
//   );
// }

// export default App;
