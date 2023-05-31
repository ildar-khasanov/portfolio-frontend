import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/header/header";
import { fetchAuthMe } from "../redux/slices/auth";

const Home = () => {
    const dispatch = useDispatch();
    dispatch(
        fetchAuthMe({ email: "hasanov3456@yandex.ru", password: "#fafjJf3" })
    );
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                JavaScript, ReactJS, Redux, Redux toolkit,
                                BootStrap
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>
                                Node.JS, Express, Sequalize, Mongoose
                                PostgreSQL, MongoDB
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
