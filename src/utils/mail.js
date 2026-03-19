import Mailgen from "mailgen";



const emailVerificationMailgenContent = (username,verificationUrl)=>{
    return {
        body:{
            name: username,
            intro : "Welcome to our App!, we're excited to have you on board.",
            action:{
                instructions : "To verify your email please click on following button",
                button:{
                    color: "#1aae55ff",
                    text:"verify your email",
                    link: verificationUrl
                },
            },
            outro:
            "Need help, or have any questions ? Just reply to this email, we'd love to help you. ",
        },
    };
};

const forgotPasswordMailgenContent = (username,passwordResrtUrl)=>{
    return {
        body:{
            name: username,
            intro : "we got a request to reset the password of your account",
            action:{
                instructions : "To reset click on the following button down below",
                button:{
                    color: "rgb(18, 76, 41)",
                    text:"Reset password",
                    link: passwordResrtUrl
                },
            },
            outro:
            "Need help, or have any questions ? Just reply to this email, we'd love to help you. ",
        },
    };
};


export {emailVerificationMailgenContent,forgotPasswordMailgenContent};