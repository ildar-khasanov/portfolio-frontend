import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "../common/form/CheckBox";
import MultiSelect from "../common/form/MultiSelect";
import RadioFeild from "../common/form/RadioFeild";
import SelectFeild from "../common/form/SelectFeild";
import TextFeild from "../common/form/TextFeild";
import { validator } from "../utils/validator";

const RegistrFrom = () => {
    const history = useNavigate();
    const registerForm = async (data) => {
        try {
            const res = await fetch("http://localhost:8000/auth/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const json = await res.json();

            history("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        floor: "male",
        favoriteColor: [],
        license: false,
    });
    const [errors, setErrors] = useState({});
    const handleValueInput = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const professions = ["developer", "designer", "tester"];

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
        profession: {
            isRequired: {
                message: "Пожалуйста, выберите вашу профессию",
            },
        },
        license: {
            isRequired: {
                message: "Необходимо принять лицензионное соглашение",
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
        registerForm(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="login__title">Registr</h2>
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
            <SelectFeild
                placeHolder="Выберите..."
                label="Профессия"
                name="profession"
                value={data.profession}
                onChange={handleValueInput}
                professions={professions}
                errors={errors.profession}
            />
            <RadioFeild
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                ]}
                type="radio"
                value={data.floor}
                name="floor"
                label="Выберите пол"
                onChange={handleValueInput}
            />

            <MultiSelect
                label="Выберите ваш любимый цвет"
                defaultValue={data.favoriteColor}
                onChange={handleValueInput}
                name="favoriteColor"
            />
            <CheckBox
                name="license"
                label="Примите лицензионное соглашиение"
                onChange={handleValueInput}
                value={data.license}
                errors={errors.license}
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

export default RegistrFrom;
