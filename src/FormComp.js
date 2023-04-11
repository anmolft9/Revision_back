import { useState } from "react";

export const FormComp = ({ getTheData }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setStr(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getTheData(str);
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <label for="anything">Type anything:</label>
        <input onChange={handleOnChange} type="text" id="anythingTyped" />
        <button type="submit">Show</button>
      </form>
    </>
  );
};
