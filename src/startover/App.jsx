import { useState } from "react";
import "./App.css";
/**
 *  const formArray = [
 * {title: '',id: 0,fields: [{type, id, label, value}],},
 * ]
 */
const formsInit = [
  {
    title: "Contact Section",
    className: "contact-form",
    fields: [
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
    className: "career-form",
    fields: [
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
    className: "work-form",
    isDynamic: true,
    fields: [
      {
        type: "text",
        id: "exp-job--title",
        label: "Job Title: ",
        value: "",
        placeholder: "District Manager",
      },
      {
        type: "date",
        id: "exp-job--start",
        label: "Year Started: ",
        value: "",
      },
      { type: "date", id: "exp-job--end", label: "Year Ended: ", value: "" },
      {
        type: "text",
        id: "exp-company--name",
        label: "Company Name: ",
        value: "",
        placeholder: "Verizon Wireless",
      },
      {
        type: "text",
        id: "exp-company--location",
        label: "Location: ",
        value: "",
        placeholder: "San Francisco, CA",
      },
      // TODO:
      // list of comapny experience details
    ],
  },
  {
    title: "Education Section",
    className: "education-form",
    fields: [
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

  function onAddInputField() {}

  function handleInputChange(e, formIndex, fieldIndex) {
    const { value } = e.target;
    setForms((prevForms) =>
      prevForms.map((form, idx) =>
        idx === formIndex
          ? {
              ...form,
              fields: form.fields.map((field, fIdx) =>
                fIdx === fieldIndex ? { ...field, value } : field
              ),
            }
          : form
      )
    );
  }

  return (
    <div className="container">
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      <Form
        form={forms[currFormIndex]}
        onChange={handleInputChange}
        formIndex={currFormIndex}
      />
    </div>
  );
}

function Form({ form, formIndex, onChange, onAddInputField }) {
  return (
    <form id={form.id} className={form.className}>
      <h3>{form.title}</h3>
      {form.isDynamic && <button onClick={onAddInputField}>Add Field</button>}
      {form.fields.map((field, index) => {
        return (
          <p key={index}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                {...field.att}
                onChange={(e) => onChange(e, formIndex, index)}
                value={field.value}
                name={field.name}
                id={field.id}
              ></textarea>
            ) : (
              <input
                placeholder={field.placeholder ?? field.placeholder}
                datatype={index}
                onChange={(e) => onChange(e, formIndex, index)}
                type={field.type}
                value={field.value}
                name={field.name}
                id={field.id}
              />
            )}
          </p>
        );
      })}
      <p></p>
    </form>
  );
}
