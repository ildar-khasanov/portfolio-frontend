import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import TextFeild from "../common/form/TextFeild";

const TestPage = () => {
    const { handleSubmit } = useForm({
        defaultValues: {
            email: "tes2t@ya.ru",
            password: "12345",
        },
        mode: "onSubmit",
    });
    const testSubmit = (e) => {
        console.log(e);
    };
    return (
        <form onSubmit={handleSubmit(testSubmit)}>
            <h2 className="login__title">Test</h2>
            <TextFeild
                label="Email"
                type="text"
                name="email"
                value="fjda"
                // errors={errors.email}
                // onChange={handleValueInput}
            />
            <TextFeild
                label="Password"
                type="password"
                name="password"
                value="fdjafs"
                // errors={errors.password}
                // onChange={handleValueInput}
            />

            <button className="btn btn-primary w-100 mt-4" type="submit">
                Submit
            </button>
        </form>
    );
};

export default TestPage;
