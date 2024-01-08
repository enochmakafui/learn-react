import React from "react";
import NewEntryItem from "./NewEntryItem";

const NewEntry = (props) => {
  const dataArray = props.newData;

  return (
    <React.Fragment>
      {dataArray.map((data) => {
        return <NewEntryItem key={Math.random().toString()} data={data} />;
      })}
    </React.Fragment>
  );
};

export default NewEntry;
