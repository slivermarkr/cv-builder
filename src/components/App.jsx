import Contact from "./contact/Contact";
import ProfessionalSummary from "./summary/profSummary";
import WorkExperience from "./experience/workExperience";
import Education from "./education/Education";
import Skills from "./skills/Skill";
import { useState } from "react";

import ContactForm from "./form/contactForm";
import ProfSummaryForm from "./form/experiecneForm";
import WorkExperienceForm from "./form/workExperienceForm";

let initialSummary =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus similique animi ab culpa vel! Quis quaerat porro natus ratione, odit, officiis voluptate alias hic quasi similique quos vitae repellat soluta console.warn";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "Ashley",
    lastName: "Williams",
    zipCode: "1900",
    city: "San Francisco",
    state: "California",
    email: "ashley.williams@gmail.com",
    phone: "555-555-555",
  });

  const [summary, setSummary] = useState(initialSummary);

  function onContactInputChange(state, stateUpdater) {
    return function (e) {
      const target = e.target;
      const key = target.name;
      if (typeof state === "object") {
        stateUpdater({
          ...state,
          [key]: target.value,
        });
      } else if (typeof state === "string") {
        stateUpdater(target.value);
      }
    };
  }
  return (
    <>
      <div className="form-container">
        <ContactForm
          initValue={contact}
          onChange={onContactInputChange(contact, setContact)}
        />
        <ProfSummaryForm
          onChange={onContactInputChange(summary, setSummary)}
          initValue={summary}
        />
        <WorkExperienceForm />
      </div>
      <Resume contactInfo={contact} summaryInfo={summary} />
    </>
  );
}

function Resume({ contactInfo, summaryInfo }) {
  return (
    <div className="cv">
      <Contact contact={contactInfo} />
      <ProfessionalSummary summary={summaryInfo} />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}
