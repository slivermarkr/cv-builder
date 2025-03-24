export default function ProfessionalSummary({ summary }) {
  return (
    <div className="container">
      <section className="summary">
        <div className="section-title">Professional Summary</div>
        <p className="summary-text">{summary}</p>
      </section>
    </div>
  );
}
