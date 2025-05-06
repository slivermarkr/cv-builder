import InputField from "./InputField"

export default function EducationForm({ values, onChange, onAdd, onDelete }) {
    const KEY = "education"
    const newEntry = {
        id: crypto.randomUUID(),
        fieldChildren: [
            { value: undefined, type: "text", id: "course-name", label: "Course Name: ", placeholder: "Random Degree" },
            { value: undefined, type: "text", id: "school-name", label: "School Name", placeholder: "Random State University" },
            { value: undefined, type: "text", id: "school-location", label: "School Location: ", placeholder: "Random City" },
            { value: undefined, type: "date", id: "school-start", label: "Start: ", placeholder: "" },
            { value: undefined, type: "date", id: "school-end", label: "End: ", placeholder: "" },
            { value: undefined, type: "textarea", id: "course-description", label: "Notable Achievement: ", placeholder: "Education highlights.." },
        ]
    }

    const addDefault = () => {
        onAdd(KEY, newEntry)
    }

    return (
        <fieldset>
            <legend>Background Education Section</legend>
            <button type="button" className="add" onClick={addDefault}>Add Field</button>
            {values[KEY].map((entry) => {
                return (
                    <div key={entry.id} className="field-wrapper">
                        <div className="entry-group">
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