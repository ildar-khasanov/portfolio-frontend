const CheckBox = ({ name, label, value, onChange, errors }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: !value });
    };

    const getHtmlClasses = () => {
        return "form-check-input" + (errors ? " is-invalid" : "");
    };

    return (
        <div className="form-check mt-3">
            <input
                className={getHtmlClasses()}
                type="checkbox"
                value={value}
                id={name}
                onChange={handleChange}
                name={name}
            />
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
