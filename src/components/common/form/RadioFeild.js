const RadioFeild = ({ label, name, type, options, value, onChange }) => {
    const handleChange = ({ target }) => {
        onChange(target);
    };
    return (
        <>
            <label className="form-label mt-3">{label}</label>
            <div className="d-flex">
                {options.map((n, i) => (
                    <div key={i + 1} className="form-check d-inline me-2">
                        <input
                            className="form-check-input"
                            type={type}
                            name={name}
                            id={n.name + "_" + n.value}
                            value={n.value}
                            checked={n.value === value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={n.name + "_" + n.value}
                        >
                            {n.name}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RadioFeild;
