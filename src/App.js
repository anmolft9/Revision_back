import { useState } from "react";
import { FormComp } from "./FormComp.js";
import { TableComponent } from "./TableComponent.js";

const App = () => {
  const [arr, setArr] = useState([""]);

  const getTheData = (str) => {
    setArr([...arr, str]);
  };
  console.log(arr);

  return (
    <div className="App">
      <FormComp getTheData={getTheData} />
      <TableComponent sendTheData={arr} />
    </div>
  );
};

export default App;
