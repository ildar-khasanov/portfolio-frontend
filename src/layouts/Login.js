import { NavLink, useParams } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import Registr from "../components/login/RegistrForm";
import "./style.css";
const Login = () => {
    const { type } = useParams();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 mb-5">
                    {type === undefined ? (
                        <>
                            <LoginForm />
                            <p className="d-block mt-3">
                                У вас нет аккаунта?{" "}
                                <NavLink to="/login/registr">
                                    Зарегистрируйтесь
                                </NavLink>
                            </p>
                        </>
                    ) : (
                        <>
                            <Registr />
                            <p className="d-block mt-3">
                                У вас есть аккаунт?{" "}
                                <NavLink to="/login/">Войдите</NavLink>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
