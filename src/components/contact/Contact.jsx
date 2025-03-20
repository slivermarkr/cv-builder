import "./contact.css";
export default function Contact({ contact }) {
  return (
    <div className="container">
      <section className="contacts">
        <p className="contact-name gap-1">
          {contact.firstName} {contact.lastName}
        </p>
        <div className="contact-info row">
          <p className="address">
            {contact.city}, {contact.state} {contact.zipCode}
          </p>
          <p className="phone">{contact.phone}</p>
          <p className="email">{contact.email}</p>
        </div>
      </section>
    </div>
  );
}
