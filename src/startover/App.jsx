import { useState } from "react";

const formNames = ["Contact", "Work Experience", "Career Summary"];
export default function App() {
  const [currForm, setCurrForm] = useState(0);

  console.log(currForm);
  function handleNextClick() {
    setCurrForm((curr) => curr + 1);
    if (currForm >= formNames.length - 1) {
      setCurrForm(0);
    }
  }
  return (
    <div className="container">
      <button onClick={handleNextClick}>Next</button>
      {formNames.map((names, id) => {
        if (id === currForm) {
          return <Form name={names} key={id} />;
        }
      })}
    </div>
  );
}

function Form({ name, id }) {
  return (
    <form id={id}>
      <h3>{name}</h3>
      <p>
        <label htmlFor="inp">Put some input here: </label>
        <input type="text" name="" id="inp" />
      </p>
    </form>
  );
}
