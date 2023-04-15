import Select from "react-select";

const MultiSelect = ({ label, onChange, name, defaultValue }) => {
    const handleChange = (value) => {
        onChange({ name: name, value });
    };

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div className="mt-4">
            <label htmlFor="validationDefault04" className="form-label mt-3">
                {label}
            </label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                options={options}
                onChange={handleChange}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default MultiSelect;
