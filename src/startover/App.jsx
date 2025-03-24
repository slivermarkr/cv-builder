import { useState } from "react";
/**
 *  const formArray = [
 * {title: '',id: 0,childrenInput: [{type, id, label, value}],},
 * ]
 */
const formsInit = [
  {
    title: "Contact",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
  {
    title: "Work Experience",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
  {
    title: "Career Summary",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
  {
    title: "Education",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
];

export default function App() {
  const [currFormIndex, setCurrForm] = useState(0);
  const [forms, setForms] = useState(formsInit);

  console.log(currFormIndex);
  function handleNextClick() {
    setCurrForm((curr) => curr + 1);
    if (currFormIndex >= forms.length - 1) {
      setCurrForm(0);
    }
  }
  function handleBackClick() {
    setCurrForm((curr) => curr - 1);
    if (currFormIndex <= 0) {
      setCurrForm(forms.length - 1);
    }
  }

  function handleInputChange(e) {
    const targetForm = forms[currFormIndex];
    const text = e.target.value;

    setForms(
      forms.map((form) => {
        if (form.id === targetForm.id) {
          targetForm.childrenInput.map((child) => {
            if (child.id === e.target.id) {
              child.value = text;
            }
            return child;
          });
        }
        return form;
      })
    );
  }

  return (
    <div className="container">
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      {forms.map((form, id) => {
        if (id === currFormIndex) {
          return (
            <Form
              name={form.title}
              key={id}
              onChange={handleInputChange}
              childArray={form.childrenInput}
            />
          );
        }
      })}
    </div>
  );
}
function Form({ name, id, onChange, childArray }) {
  return (
    <form id={id}>
      <h3>{name}</h3>
      {childArray.map((child, index) => {
        return (
          <p key={index}>
            <label htmlFor={child.id}>Put some input here: </label>
            <input
              datatype={index}
              onChange={onChange}
              type={child.type}
              value={child.value}
              name=""
              id={child.id}
            />
          </p>
        );
      })}
      <p></p>
    </form>
  );
}
