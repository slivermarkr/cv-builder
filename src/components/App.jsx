import Contact from "./contact/Contact";
import ProfessionalSummary from "./summary/profSummary";
import WorkExperience from "./experience/workExperience";
import Education from "./education/Education";
import Skills from "./skills/Skill";
import { useState } from "react";

function Resume({ firstName, lastName }) {
  return (
    <div className="cv">
      <Contact firstName={firstName} lastName={lastName} />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}

function ContactForm({ handleFirstNameChange, handleLastNameChange }) {
  return (
    <form className="contactForm">
      <div className="fullNameInp">
        <p>
          <label htmlFor="firstName">Firstname:</label>

          <input
            onChange={handleFirstNameChange}
            type="text"
            id="firstName"
            placeholder="Ashley"
          />
        </p>
        <p>
          <label htmlFor="lastName">Lastname:</label>

          <input
            onChange={handleLastNameChange}
            type="text"
            id="lastName"
            placeholder="Williams"
          />
        </p>
      </div>
      <div className="addressInp">
        <p>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" />
        </p>
        <p>
          <label htmlFor="state">State/Province:</label>

          <input type="text" id="state" />
        </p>
        <p>
          <label htmlFor="zipCode">Zip code:</label>

          <input type="text" id="zipCode" />
        </p>
      </div>
    </form>
  );
}
export default function App() {
  const [fname, setFirstname] = useState("Ashley");
  const [lname, setLastname] = useState("Williams");

  function handleFirstNameChange(e) {
    setFirstname(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastname(e.target.value);
  }
  return (
    <>
      <ContactForm
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <Resume lastName={lname} firstName={fname} />
    </>
  );
}
