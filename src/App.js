import { useState } from "react";
import { FormComp } from "./FormComp.js";
import { TableComponent } from "./TableComponent.js";

const App = () => {
  const [arr, setArr] = useState([]);

  const getTheData = (str) => {
    setArr([...arr, str]);
  };

  return (
    <div className="App">
      <FormComp getTheData={getTheData} />
      <TableComponent props={arr} />
    </div>
  );
};

export default App;
