"use server";
import transport from "../utils/nodemailer";

const submitContactFrom = async (data) => {
  const { fName, lName, email, message } = data;

  try {
    const sent = await transport.sendMail({
      from: process.env.MAIL_FROM,
      to: "awais.brainloggers@gmail.com",
      subject: `Wyze Tech Contact Form Submission`,
      html: `<h3>Website Contact Form Submission</h3>
            Email: ${email}<br />
            <p>First Name: ${fName} ${lName}<br />
            </p>
            <hr/>
            <p>${message}</p>`,
    });

    if (sent.response.includes("250")) {
      return { message: "Sent Successfully" };
    }
    return { error: "Something went wrong while sending the email" };
  } catch (error) {
    return { error: error.message };
  }
};

export default submitContactFrom;
