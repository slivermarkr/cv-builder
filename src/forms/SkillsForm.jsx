import { useState } from "react";
import InputField from "./InputField"

export default function SkillsForm({ values, onAdd, onDelete }) {
    const [value, setValue] = useState(["", crypto.randomUUID()]);

    const KEY = "skills"

    const addDefault = (e) => {
        e.preventDefault()
        onAdd(KEY, value)
        setValue(["", crypto.randomUUID()])
        const form = e.target.closest("form")
        form.reset();
    }

    function updateValue(value) {
        setValue((prev) => {
            return [value, prev[1]]
        })
    }
    return (
        <fieldset>
            <legend>Skills Section</legend>
            <div className="flex skills-container">
                <InputField
                    key="skills"
                    type="text"
                    id="skills"
                    label="Add New Skill: "
                    placeholder="ex. Typescript"
                    parentKey={KEY}
                    onChange={updateValue}
                />
                <button type="submit" className="add-skill" onClick={addDefault}>Okay</button>
            </div>
            <ul className="skills-form--list">
                {
                    values[KEY].map((listItem) => {
                        return (
                            <li key={listItem[1]} className='flex skills-item'>
                                <p>{listItem[0]}</p>
                                <span onClick={(e) => onDelete(e, KEY, listItem[1])} className="delete-skill">X</span>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}