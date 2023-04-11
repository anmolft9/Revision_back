import React from "react";

export const TableComponent = ({ sendTheData }) => {
  console.log(sendTheData);
  return (
    <table>
      <ul>
        <li>
          {sendTheData.map((e) => {
            return <li>{e}</li>;
          })}
        </li>
      </ul>
    </table>
  );
};
