import React, { useState } from "react";
import Form from "./Components/Form";
import NewEntry from "./Components/NewEntry";

const App = () => {
  const [entryData, setEntryData] = useState([]);

  const newDataHandler = (data) => {
    setEntryData((prevData) => {
      const updatedEntry = [...prevData];
      updatedEntry.unshift({
        name: data.nameEntered,
        age: data.ageEntered,
        id: Math.random().toString(),
      });

      return updatedEntry;

    });
  };
  return (
    <div>
      <Form newDataHandler={newDataHandler} />
      { entryData.length > 0 && (
      <NewEntry newData={entryData}  />
      )
      }
    </div>
  );
};

export default App;
