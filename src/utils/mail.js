import Mailgen from "mailgen";
import nodemailer from "nodemailer"

//sending email function 
const sendEmail=async (options) =>{
    const mailGenerator = new Mailgen({
        theme:'default',
        product:{
           name: "Task Manager",
           link: "https://taskmanagelink.com" 
        }
    })
    
    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

    const emailHtml=mailGenerator.generate(options.mailgenContent);

    const transporter = nodemailer.createTransport({
        host:process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user:process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail={
        from : "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service filed silently. Make sure you have provided mail trap credentials in the .env file");
        console.log("Error: ", error);
    }
}


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


export {emailVerificationMailgenContent,forgotPasswordMailgenContent,sendEmail};