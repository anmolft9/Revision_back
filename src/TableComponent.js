import React from "react";

export const TableComponent = ({ props }) => {
  //   console.log(sendTheData);
  return (
    <ul>
      {props.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
  );
};
