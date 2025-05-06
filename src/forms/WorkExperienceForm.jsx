import InputField from "./InputField"

export default function WorkExpForm({ values, onChange, onAdd, onDelete }) {

    const KEY = "work_experience"
    const newEntry = {
        id: crypto.randomUUID(),
        fieldChildren: [
            { value: undefined, type: "text", id: "job-title", label: "Job Title: ", placeholder: "Operations Manager" },
            { value: undefined, type: "text", id: "company-name", label: "Company Name: ", placeholder: "Verizon Wireless" },
            { value: undefined, type: "text", id: "company-location", label: "Company Location: ", placeholder: "San Diego, CA" },
            { value: undefined, type: "date", id: "company-start", label: "Start: ", placeholder: "" },
            { value: undefined, type: "date", id: "company-end", label: "End: ", placeholder: "" },
            { value: undefined, type: "textarea", id: "job-description", label: "Description: ", placeholder: "Describe your job..." },
        ]
    }

    const addDefault = () => {
        onAdd(KEY, newEntry)
    }

    return (
        <fieldset>
            <legend>Work Experience Section</legend>
            <button type="button" className="add" onClick={addDefault}>Add Field</button>
            {values[KEY].map((entry) => {
                return (
                    <div key={entry.id} className="field-wrapper" >
                        <div className="entry-group" >
                            {entry.fieldChildren.map(field => (
                                <InputField
                                    key={field.id}
                                    type={field.type}
                                    id={field.id}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    values={values}
                                    parentKey={KEY}
                                    index={entry.id}
                                    onChange={onChange}
                                    defaultValue={field.value}
                                />
                            ))}
                        </div>
                        <button className="delete" onClick={(e) => onDelete(e, KEY, entry.id)}>X</button>
                    </div>
                )
            }
            )}
        </fieldset>
    )
}