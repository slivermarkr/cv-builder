export default function WorkExperienceForm() {
  return (
    <form className="experience-form--container">
      <Input />
      <Input />
      <Input />
    </form>
  );
}

function Input() {
  // const [details, setDetails] = useState([]);

  function handleDetailsBtnClick() {
    console.log("CLICKED");
  }
  return (
    <div className="exp-input--container">
      <p className="job-title--container">
        <label htmlFor="job-title">Job Title: </label>
        <input type="text" id="job-title" />
      </p>
      <div className="exp-date--container">
        <p className="row">
          <label htmlFor="job-date--start">Start: </label>
          <input type="date" id="job-date--start" />
        </p>
        <p className="row">
          <label htmlFor="job-date--end">End: </label>
          <input type="date" id="job-date--end" />
        </p>
      </div>
      <p className="exp-details">
        <button onClick={handleDetailsBtnClick}>Add</button>
      </p>
    </div>
  );
}
