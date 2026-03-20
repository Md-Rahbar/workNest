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


export{userRegiterValidator,userLoginValidator};