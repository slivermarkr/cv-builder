import "./contact.css";
export default function Contact({ firstName, lastName }) {
  return (
    <div className="container">
      <section className="contacts">
        <p className="contact-name gap-1">
          {firstName} {lastName}
        </p>
        <div className="contact-info row">
          <p className="address">San Francisco, California 1900</p>
          <p className="phone">555-555-555</p>
          <p className="email">ashley.williams@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
