const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName: "";
    data.motto = !isEmpty(data.motto) ? data.motto : "";
    data.badgeNumber = !isEmpty(data.badgeNumber) ? data.badgeNumber: "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber: "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //First Name checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name field is required";
    }

    //Last Name checks
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name field is required";
    }

    //Motto checks
    if (Validator.isEmpty(data.motto)) {
        errors.motto = "Motto field is required";
    }

    //Badge Number checks
    if (Validator.isEmpty(data.badgeNumber)) {
        errors.badgeNumber = "Badge Number field is required";
    }

    //Phone Number checks
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone Number field is required";
    }

    //Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};