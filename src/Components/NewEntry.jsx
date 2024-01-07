import React from "react";
import NewEntryItem from "./NewEntryItem";

const NewEntry = (props) => {
    const dataArray =props.newData;

  return (
    <div className="New-Entry-Item">
      {dataArray.map((data) => {
        <NewEntryItem key={Math.random().toString()} data={data} />;
      })}
      {/* <p>{props.newData[0].name}</p> */}
    </div>
  );
};

export default NewEntry;
