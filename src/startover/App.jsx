import { useState } from "react";
import "./App.css";
/**
 *  const formArray = [
 * {title: '',id: 0,childrenInput: [{type, id, label, value}],},
 * ]
 */
const formsInit = [
  {
    title: "Contact Section",
    childrenInput: [
      {
        type: "text",
        id: "first-name",
        label: "Firstname: ",
        value: "",
        name: "firstname",
        placeholder: "Ashley",
      },
      {
        type: "text",
        id: "last-name",
        label: "Lastname: ",
        value: "",
        name: "lastname",
        placeholder: "Williams",
      },
      {
        type: "text",
        id: "state",
        label: "State: ",
        value: "",
        name: "state",
        placeholder: "California",
      },
      {
        type: "text",
        id: "city",
        label: "City: ",
        value: "",
        name: "city",
        placeholder: "San Francisco",
      },
      {
        type: "email",
        id: "email",
        label: "Email: ",
        value: "",
        name: "email",
        placeholder: "ashley.williams@gmail.com",
      },
      {
        type: "tel",
        id: "phone",
        label: "Phone #: ",
        value: "",
        name: "phone",
        placeholder: "555-555-555",
      },
    ],
  },
  {
    title: "Career Summary Section",
    childrenInput: [
      {
        type: "textarea",
        id: "career-summary",
        label: "Career Summary / Objectives: ",
        placeholder: "Summarize your career or state your career objectives",
        value: "",
        att: { maxLength: 60, minLength: 20 },
      },
    ],
  },
  {
    title: "Work Experience Section",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
  {
    title: "Education Section",
    childrenInput: [
      { type: "text", id: "try", label: "Put something in here: ", value: "" },
    ],
  },
];

export default function App() {
  const [currFormIndex, setCurrForm] = useState(0);
  const [forms, setForms] = useState(formsInit);

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
            <label htmlFor={child.id}>{child.label}</label>
            {child.type === "textarea" ? (
              <textarea
                placeholder={child.placeholder ?? child.placeholder}
                datatype={index}
                onChange={onChange}
                value={child.value}
                name={child.name}
                id={child.id}
                maxLength={child.att["maxLength"] ?? child.att["maxLength"]}
                minLength={child.att["minLength"] ?? child.att["minLength"]}
              ></textarea>
            ) : (
              <input
                placeholder={child.placeholder ?? child.placeholder}
                datatype={index}
                onChange={onChange}
                type={child.type}
                value={child.value}
                name={child.name}
                id={child.id}
              />
            )}
          </p>
        );
      })}
      <p></p>
    </form>
  );
}
