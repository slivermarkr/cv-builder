export default function WorkExperience() {
  return (
    <div className="container">
      <section className="experience">
        <div className="section-title">Work Experience</div>
        <ul className="experience-list">
          <List />
          <List />
        </ul>
      </section>
    </div>
  );
}

function List() {
  return (
    <li className="experience-list--item">
      <div className="role">
        <span className="bold">District Manager</span>
        <span className="experience-years">, 08/21 to Current</span>
      </div>
      <div className="company-info">
        <span className="company-name bold">Verizon Wireless</span>
        <span className="company-location"> - San Francisco, CA</span>
      </div>
      <ul className="experience-detail--list">
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          molestiae.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          molestiae.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          molestiae.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          molestiae.
        </li>
      </ul>
    </li>
  );
}
