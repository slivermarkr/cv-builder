export default function EducationSection() {
  return (
    <div className="container">
      <section className="education">
        <div className="section-title">Education</div>
        <ul className="education-list">
          <li>
            <div className="degree-info">
              <span className="degree bold">Master of Arts: </span>
              <span className="course">
                Operations Management, <span className="courseDate">2009</span>
              </span>
            </div>
            <div className="degree-location bolc">
              <span className="school-name">
                San Francisco State University
              </span>
              <span className="school-location">- San Francisco, CA</span>
            </div>
          </li>
          <li>
            <div className="degree-info">
              <span className="degree bold">Master of Arts: </span>
              <span className="course">
                Operations Management, <span className="courseDate">2009</span>
              </span>
            </div>
            <div className="degree-location">
              <span className="school-name bold">
                San Francisco State University
              </span>
              <span className="school-location">- San Francisco, CA</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
