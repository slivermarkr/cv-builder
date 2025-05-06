import InputField from "./InputField"
export default function AboutForm({ values, onChange }) {
    const KEY = 'about'
    const fields = [
        { type: "textarea", id: "about", label: "About: ", placeholder: "Write something about yourself..." },
    ]
    return (
        <fieldset>
            <legend>About Section</legend>
            {fields.map(field => <InputField onChange={onChange}{...field} key={field.id} parentKey={KEY} values={values} />)}
        </fieldset>)
}