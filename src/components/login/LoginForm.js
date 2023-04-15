import { useEffect, useState } from "react";
import TextFeild from "../../components/common/form/TextFeild";
import { validator } from "../../components/utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleValueInput = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const validateConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен не корректно",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isPassword: {
                message: "Используйте минимум одну заглавную букву",
            },
            isContainDigit: {
                message: "Используйте минимум одну цифру",
            },
            min: {
                message: "Длина пароля должна быть более 8 символов",
                value: 8,
            },
        },
    };

    const getStatusError = () => {
        return Object.keys(errors).length;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const isValid = validator(data, validateConfig);
        setErrors(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="login__title">Login</h2>
            <TextFeild
                label="Email"
                type="text"
                name="email"
                value={data.email}
                errors={errors.email}
                onChange={handleValueInput}
            />
            <TextFeild
                label="Password"
                type="password"
                name="password"
                value={data.password}
                errors={errors.password}
                onChange={handleValueInput}
            />

            <button
                className="btn btn-primary w-100 mt-4"
                type="submit"
                disabled={getStatusError()}
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
