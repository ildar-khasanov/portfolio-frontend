import { useState } from "react";
import eye from "../../../img/icons/eye.svg";
import eyeSlash from "../../../img/icons/eye-slash.svg";

const TextFeild = ({ type, name, value, onChange, label, errors }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        return setIsShowPassword((prevState) => !prevState);
    };

    const handleChange = ({ target }) => {
        onChange(target);
    };

    const isError = () => {
        return "form-control" + (errors ? " is-invalid" : "");
    };
    return (
        <div>
            <label className="form-label mt-3">{label}</label>
            <div className="input-group has-validation">
                <input
                    name={name}
                    className={isError()}
                    type={isShowPassword ? "text" : type}
                    value={value}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={toggleShowPassword}
                    >
                        {!isShowPassword ? (
                            <img className="btn__show-password" src={eye}></img>
                        ) : (
                            <img
                                className="btn__show-password"
                                src={eyeSlash}
                            ></img>
                        )}
                    </button>
                )}

                {errors && <div className="invalid-feedback">{errors}</div>}
            </div>
        </div>
    );
};

export default TextFeild;
