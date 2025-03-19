import Contact from "./contact/Contact";
import ProfessionalSummary from "./summary/profSummary";
import WorkExperience from "./experience/workExperience";
import Education from "./education/Education";
import Skills from "./skills/Skill";

export default function App() {
  return (
    <>
      <Contact />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <Skills />
    </>
  );
}
