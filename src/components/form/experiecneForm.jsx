export default function ProfSummaryInp({ initValue, onChange }) {
  return (
    <form className="profSummaryForm">
      <p>
        <label htmlFor="summary">Professional Summary: </label>
        <textarea
          placeholder="Describe your professional experience..."
          type="text"
          id="summary"
          value={initValue}
          onChange={(e) => onChange(e)}
        />
      </p>
    </form>
  );
}
