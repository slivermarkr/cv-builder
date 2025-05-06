export default function InputField({ type, propId, label, onChange, parentKey, values, index, id = undefined, defaultValue, ...props }) {
    let value;
    if (parentKey === "contact") {
        value = values[parentKey][propId]
    } else if (parentKey === "about") {
        value = values[parentKey]
    } else if (parentKey === "work_experience" || parentKey === "education") {

        const outerIndex = values[parentKey].findIndex(el => el.id === index);

        const targetObj = values[parentKey][outerIndex];

        const inputIndex = targetObj.fieldChildren.findIndex(el => el.id === id);
        const targetInput = targetObj.fieldChildren[inputIndex];

        value = targetInput.value;
    }

    const handleChange = (e) => {

        if (parentKey === "work_experience" || parentKey === "education") {
            onChange(parentKey, id, e.target.value, index)
        } else if (parentKey === 'skills') {
            onChange(e.target.value)
        } else {
            onChange(parentKey, propId, e.target.value)
        }
    }
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            {
                type === "textarea"
                    ? <textarea {...props} id={id} value={value} onChange={(handleChange)} />
                    : <input {...props} type={type} id={id} value={value} onChange={handleChange} />
            }
        </p>
    );
}