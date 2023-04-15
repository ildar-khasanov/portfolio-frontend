export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof data === "boolean") {
                    statusValidate = !data;
                } else {
                    statusValidate = data.trim() === "";
                }
                break;
            case "isEmail":
                const isEmail = /\S+@+\S+\.\S+/g;
                statusValidate = !isEmail.test(data);
                break;
            case "isPassword":
                const isPassword = /[A-Z]+/g;
                statusValidate = !isPassword.test(data);
                break;
            case "isContainDigit":
                const isContainDigit = /\d+/g;
                statusValidate = !isContainDigit.test(data);
                break;
            case "min":
                statusValidate = data.length < config.value;
                break;
            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    for (const feild in data) {
        for (const validateMethod in config[feild]) {
            const error = validate(
                validateMethod,
                data[feild],
                config[feild][validateMethod]
            );
            if (error && !errors[feild]) {
                errors[feild] = error;
            }
        }
    }
    return errors;
}
