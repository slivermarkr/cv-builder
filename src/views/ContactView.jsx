const mock = { first_name: "Ashley", last_name: "Williams", email: "ashley.williams@gmail.com", phone: "555-555-555", address: "#123 Random St.", city: "San Diego", state: "California", country: "USA" };
export default function ContactView({ value }) {
    const contact = value['contact'] ?? {};
    return (
        <>
            <section className="contact-view">
                <div className="container">
                    <p className="name">
                        {`${contact.first_name ?? mock.first_name} ${contact.last_name ?? mock.last_name}`}
                    </p>
                    <div className="contact-info small">
                        <p className="email">
                            <span>{contact.email ?? mock.email}</span>
                        </p>
                        <span className="pipe">|</span>
                        <p className="phone">
                            <span>{contact.phone ?? mock.phone}</span>
                        </p>
                        <span className="pipe">|</span>
                        <div className="address">
                            <span>{`${contact.address ?? mock.address} ${contact.city ?? mock.city}, ${contact.state ?? mock.state}, ${contact.country ?? mock.country}`}</span>
                        </div>

                    </div>

                </div>
            </section>
            <hr className="hr-bold blue"></hr>
        </>
    )
}