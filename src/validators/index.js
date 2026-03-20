import {body} from "express-validator";

const userRegiterValidator =()=>{
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),
        body("username")
        .trim()
        .isEmpty()
        .withMessage("Username is required")
        .isLowercase()
        .withMessage("username must be in lower case")
        .isLength({min:3})
        .withMessage("Username must be atleast 3 characters"),
        body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),
        body("fullName")
        .optional()
        .trim()
    ]
}

const userLoginValidator = ()=>{
    return [
        body("emai")
        .optional()
        .isEmail()
        .withMessage("Email is invalid "),
        body("password")
        .notEmpty().withMessage("Password is required"),
    ];
};

const userChangeCurrentPasswordValidator = ()=>{
   return [
    body("oldPassword").notEmpty().withMessage("Old password is required"),
    body("newPassword").notEmpty().withMessage("New password is required")
   ] 
}

const userForgotPasswordValidator = ()=>{
    return[
        body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),
    ];
};

const userResetForgotPasswordValidator=()=>{
    return [
        body("newPassword")
        .notEmpty()
        .withMessage("Password is required")
    ];
};

export{userRegiterValidator,userLoginValidator, userChangeCurrentPasswordValidator,userForgotPasswordValidator,userResetForgotPasswordValidator};