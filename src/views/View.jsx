import ContactView from "./ContactView"
import AboutView from "./AboutView"
import WorkExperienceView from "./WorkExperienceView"
import EducationView from "./EducationView"
import SkillsView from "./SkillsView"
export default function View({ data }) {
    return (
        <div className="view">
            <ContactView value={data} />
            <AboutView value={data} />
            <WorkExperienceView value={data} />
            <EducationView value={data} />
            <SkillsView value={data} />
        </div>
    )
}