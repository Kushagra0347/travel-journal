import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <div class='main'>
        {data.map((item) => {
          return (
            <Card
              image={item.image}
              location={item.location}
              mapLink={item.mapLink}
              place={item.place}
              fromDate={item.fromDate}
              toDate={item.toDate}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
