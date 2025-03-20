import Contact from "./contact/Contact";
import ProfessionalSummary from "./summary/profSummary";
import WorkExperience from "./experience/workExperience";
import Education from "./education/Education";
import Skills from "./skills/Skill";
import { useState } from "react";

function Resume({ contactInfo }) {
  return (
    <div className="cv">
      <Contact contact={contactInfo} />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}

function ContactForm({ onChange }) {
  return (
    <form className="contactForm">
      <div className="fullNameInp">
        <p>
          <label htmlFor="firstName">Firstname:</label>

          <input
            onChange={onChange}
            type="text"
            id="firstName"
            placeholder="Ashley"
            name="firstName"
          />
        </p>
        <p>
          <label htmlFor="lastName">Lastname:</label>

          <input
            onChange={onChange}
            type="text"
            id="lastName"
            placeholder="Williams"
            name="lastName"
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>

          <input
            onChange={onChange}
            type="email"
            id="email"
            placeholder="ashley.williams@gmail.com"
            name="email"
          />
        </p>
        <p>
          <label htmlFor="email">Phone #:</label>

          <input
            onChange={onChange}
            type="tel"
            id="phone"
            placeholder="555-555-555"
            name="phone"
          />
        </p>
      </div>
      <div className="addressInp">
        <p>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" onChange={onChange} />
        </p>
        <p>
          <label htmlFor="state">State/Province:</label>

          <input type="text" id="state" name="state" onChange={onChange} />
        </p>
        <p>
          <label htmlFor="zipCode">Zip code:</label>

          <input type="text" id="zipCode" name="zipCode" onChange={onChange} />
        </p>
      </div>
    </form>
  );
}
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

  function onContactInputChange(e) {
    const target = e.target;
    const key = target.name;
    setContact({
      ...contact,
      [key]: target.value,
    });
  }
  return (
    <>
      <ContactForm onChange={onContactInputChange} />
      <Resume contactInfo={contact} />
    </>
  );
}
