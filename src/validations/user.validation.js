module.exports.userDataValidate = {
    username: {
        exists: {
            errorMessage: "User name is required",
            options: { checkFalsy: true },
        },
        isString: { errorMessage: "User name should be string" },
    },
    password: {
        exists: { errorMessage: "Password is required" },
        isString: { errorMessage: "password should be string" },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password should be at least 8 characters",
        },
    },
    email: {
        isEmail: { errorMessage: "Please provide valid email" },
    },
    name: {
        isString: { errorMessage: "name should be string" },
    },
    birthday: {
        isDate: { errorMessage: "Birthday should be string" },
    },
}