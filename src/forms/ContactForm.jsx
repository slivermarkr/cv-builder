import InputField from "./InputField"

export default function ContactForm({ onChange, values }) {
    const KEY = 'contact';

    const fields = [
        { type: "text", id: "first_name", label: "First Name: ", placeholder: "Ashley" },
        { type: "text", id: "last_name", label: "Last Name: ", placeholder: "Williams" },
        { type: "email", id: "email", label: "Email: ", placeholder: "ashley.williams@gmail.com" },
        { type: "text", id: "phone", label: "Phone Number: ", placeholder: "555-555-555" },
        { type: "text", id: "address", label: "Address: ", placeholder: "#123 Random St." },
        { type: "text", id: "city", label: "City: ", placeholder: "San Diego" },
        { type: "text", id: "state", label: "State: ", placeholder: "California" },
        { type: "text", id: "country", label: "Country: ", placeholder: "USA" },
    ]

    return (
        <fieldset>
            <legend>Contact Information Section</legend>
            {fields.map((field) => <InputField {...field} key={field.id} propId={field.id} onChange={onChange} parentKey={KEY} values={values} />)}
        </fieldset>
    )
}