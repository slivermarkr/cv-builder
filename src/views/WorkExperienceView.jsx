import convertDate from "../helper/convertDate";
const mock = {
  job_title: "ex. (Administrator) ",
  company_name: "Verizon",
  company_location: "San Diego, CA",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
  start: "Oct 2015",
  end: "Present",
};
export default function WorkExperienceView({ value }) {
  const work = value["work_experience"];
  return (
    <>
      <section className="work-view">
        <div className="container flex">
          <div className="title">Work Experience</div>
          <ul className="work-list">
            {work.map((listItem, index) => {
              const [
                job_title,
                company_name,
                company_location,
                date_start,
                date_end,
                description,
              ] = listItem.fieldChildren;

              const start = convertDate(date_start.value) || mock.start;
              const end = convertDate(date_end.value) || mock.end;
              return (
                <li key={listItem.id} id={listItem.id}>
                  <div className="work-list--header flex">
                    <div className="left-header">
                      <p className="job-title">
                        {job_title.value ?? mock.job_title}
                      </p>
                      <p className="company-location">{`${
                        company_name.value ?? mock.company_name
                      } - ${
                        company_location.value ?? mock.company_location
                      }`}</p>
                    </div>
                    <div className="right-header">
                      <p className="job-date">{`${start} - ${end}`}</p>
                    </div>
                  </div>
                  <ul className="work-list--content">
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
