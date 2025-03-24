export default function ContactForm({ initValue, onChange }) {
  return (
    <form className="contactForm">
      <div className="fullNameInp">
        <p>
          <label htmlFor="firstName">Firstname:</label>

          <input
            value={initValue.firstName}
            onChange={onChange}
            type="text"
            id="firstName"
            placeholder="Ashley"
            name="firstName"
          />
        </p>
        <p>
          <label htmlFor="lastName">Lastname:</label>

          <input
            value={initValue.lastName}
            onChange={onChange}
            type="text"
            id="lastName"
            placeholder="Williams"
            name="lastName"
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>

          <input
            onChange={onChange}
            type="email"
            id="email"
            placeholder="ashley.williams@gmail.com"
            name="email"
            value={initValue.email}
          />
        </p>
        <p>
          <label htmlFor="email">Phone #:</label>

          <input
            onChange={onChange}
            type="tel"
            id="phone"
            placeholder="555-555-555"
            name="phone"
            value={initValue.phone}
          />
        </p>
      </div>
      <div className="addressInp">
        <p>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={onChange}
            value={initValue.city}
          />
        </p>
        <p>
          <label htmlFor="state">State / Province:</label>

          <input
            type="text"
            id="state"
            name="state"
            onChange={onChange}
            value={initValue.state}
          />
        </p>
        <p>
          <label htmlFor="zipCode">Zip code:</label>

          <input
            type="text"
            id="zipCode"
            name="zipCode"
            onChange={onChange}
            value={initValue.zipCode}
          />
        </p>
      </div>
    </form>
  );
}
