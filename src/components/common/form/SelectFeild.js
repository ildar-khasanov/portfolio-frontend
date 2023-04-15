const SelectFeild = ({
    professions,
    name,
    placeHolder,
    onChange,
    value,
    label,
    errors,
}) => {
    const getclassNameesHtml = () => {
        return "form-select" + (errors ? " is-invalid" : "");
    };

    const handleChange = ({ target }) => {
        onChange(target);
    };

    return (
        <div className="col-md-3 w-100">
            <label htmlFor="validationServer04" className="form-label mt-3">
                {label}
            </label>
            <select
                className={getclassNameesHtml()}
                id={name}
                name={name}
                onChange={handleChange}
                value={value}
            >
                <option selected disabled value="">
                    {placeHolder}
                </option>
                {professions.map((profession, i) => (
                    <option value={i + 1} key={i + 1}>
                        {profession}
                    </option>
                ))}
            </select>
            {errors && <div className="invalid-feedback">{errors}</div>}
        </div>
    );
};

export default SelectFeild;
