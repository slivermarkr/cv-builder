import { useState } from "react";
import ContactForm from "./forms/ContactForm";
import AboutForm from "./forms/AboutForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";

import View from "./views/View";
import "./reset.css";
import "./cv.css";

const defaultValue = {
  contact: {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    state: undefined,
    country: undefined,
  },

  about: undefined,

  work_experience: [
    {
      id: crypto.randomUUID(),
      fieldChildren: [
        {
          value: undefined,
          type: "text",
          id: "job-title",
          label: "Job Title: ",
          placeholder: "Operations Manager",
        },
        {
          value: undefined,
          type: "text",
          id: "company-name",
          label: "Company Name: ",
          placeholder: "Verizon Wireless",
        },
        {
          value: undefined,
          type: "text",
          id: "company-location",
          label: "Company Location: ",
          placeholder: "San Diego, CA",
        },
        {
          value: undefined,
          type: "date",
          id: "company-start",
          label: "Start: ",
          placeholder: "",
        },
        {
          value: undefined,
          type: "date",
          id: "company-end",
          label: "End: ",
          placeholder: "",
        },
        {
          value: undefined,
          type: "textarea",
          id: "job-description",
          label: "Description: ",
          placeholder: "Describe your job...",
        },
      ],
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      fieldChildren: [
        {
          value: undefined,
          type: "text",
          id: "course-name",
          label: "Course Name: ",
          placeholder: "Random Degree",
        },
        {
          value: undefined,
          type: "text",
          id: "school-name",
          label: "School Name",
          placeholder: "Random State University",
        },
        {
          value: undefined,
          type: "text",
          id: "school-location",
          label: "School Location: ",
          placeholder: "Random City",
        },
        {
          value: undefined,
          type: "date",
          id: "school-start",
          label: "Start: ",
          placeholder: "",
        },
        {
          value: undefined,
          type: "date",
          id: "school-end",
          label: "End: ",
          placeholder: "",
        },
        {
          value: undefined,
          type: "textarea",
          id: "course-description",
          label: "Notable Achievement: ",
          placeholder: "Education highlights..",
        },
      ],
    },
  ],
  skills: [],
};

const formSelection = [
  ContactForm,
  AboutForm,
  WorkExperienceForm,
  EducationForm,
  SkillsForm,
];

export default function Cv() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [inputValues, setCurrentValues] = useState(defaultValue);
  const CurrenSectionComponent = formSelection[currentSectionIndex];

  function onNavigate(e, next = true) {
    e.preventDefault();
    if (next && currentSectionIndex < formSelection.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
    } else if (!next && currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    }
  }

  function updateInputValues(section, propId, newValues, id) {
    setCurrentValues((prev) => {
      const copy = structuredClone(prev);

      if (section === "contact") {
        copy[section][propId] = newValues;
      } else if (section === "about") {
        copy[section] = newValues;
      } else if (section === "work_experience" || section === "education") {
        const targetIndex = copy[section].findIndex((el) => el.id === id);
        const targetObj = copy[section][targetIndex];
        const inputIndex = targetObj.fieldChildren.findIndex(
          (el) => el.id === propId
        );
        const targetInput = targetObj.fieldChildren[inputIndex];
        targetInput.value = newValues;
      } else if (section === "skills") {
        copy[section].unshift(newValues);
      }
      return copy;
    });
  }

  function onAdd(key, newEntry) {
    setCurrentValues((prev) => {
      const copy = structuredClone(prev);

      copy[key].unshift(newEntry);
      return copy;
    });
  }

  function onDelete(e, key, id) {
    e.preventDefault();
    if (key === "skills") {
      setCurrentValues((prev) => {
        const copy = structuredClone(prev);

        const skills = copy[key];
        const index = skills.findIndex((item) => item[1] === id);
        skills.splice(index, 1);
        return copy;
      });
    } else {
      setCurrentValues((prev) => {
        const copy = structuredClone(prev);

        const targetIndex = copy[key].findIndex((prop) => prop.id === id);
        copy[key].splice(targetIndex, 1);
        return copy;
      });
    }
  }
  return (
    <div className="main">
      <form>
        {
          <CurrenSectionComponent
            values={inputValues}
            onChange={updateInputValues}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        }
        <div className="btnGrp">
          <button
            className="previousBtn btn"
            type="submit"
            onClick={(e) => onNavigate(e, false)}
            disabled={currentSectionIndex === 0}
          >
            Back
          </button>
          <button
            className="nextBtn btn"
            type="submit"
            onClick={(e) => onNavigate(e)}
            disabled={currentSectionIndex === formSelection.length - 1}
          >
            Next
          </button>
        </div>
      </form>
      <View data={inputValues} />
    </div>
  );
}
