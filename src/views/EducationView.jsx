import convertDate from "../helper/convertDate";
const mock = {
  course_name: "ex. (Bachelor of Business Administration)",
  school_name: "Random University",
  school_location: "San Diego, CA",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
  start: "Oct 2015",
  end: "Present",
};
export default function EducationView({ value }) {
  const data = value["education"];
  return (
    <>
      <section className="education-view">
        <div className="container flex">
          <div className="title">Education Experience</div>
          <ul className="education-list">
            {data.map((listItem) => {
              const [
                course_name,
                school_name,
                school_location,
                date_start,
                date_end,
                description,
              ] = listItem.fieldChildren;

              const start = convertDate(date_start.value) || mock.start;
              const end = convertDate(date_end.value) || mock.end;

              return (
                <li key={listItem.id}>
                  <div className="education-list--header flex">
                    <div className="left-header">
                      <p className="course-name">
                        {course_name.value ?? mock.course_name}
                      </p>
                      <p className="school-location">{`${
                        school_name.value ?? mock.school_name
                      } - ${school_location.value ?? mock.school_location}`}</p>
                    </div>
                    <div className="right-header">
                      <p className="job-date">{`${start} - ${end}`}</p>
                    </div>
                  </div>
                  <ul className="education-list--content">
                    <li className="description">
                      {description.value ?? mock.description}
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <hr className="hr"></hr>
    </>
  );
}
