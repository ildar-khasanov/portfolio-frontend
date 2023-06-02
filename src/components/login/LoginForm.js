import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import TextFeild from "../../components/common/form/TextFeild";
import { validator } from "../../components/utils/validator";
import { fetchAuth, resetFeild, selectedIsAuth } from "../../redux/slices/auth";

const LoginForm = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const isAuth = useSelector(selectedIsAuth);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "hasanov3456@yandex.ru",
        password: "#fafjJf3",
    });
    const [errors, setErrors] = useState({});
    const handleValueInput = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
        dispatch(resetFeild());
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataAuth = await dispatch(fetchAuth(data));

        if ("token" in dataAuth.payload) {
            window.localStorage.setItem("token", dataAuth.payload.token);
        }

        if (localStorage.getItem("token")) {
            return navigate("/");
        }
    };

    if (localStorage.getItem("token")) {
        return navigate("/");
    }

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
            {authState.error !== "error" && (
                <div className="text-danger mt-2">{authState.error}</div>
            )}
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
