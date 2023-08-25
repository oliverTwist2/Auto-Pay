const { Resend } = require("resend");
const dotenv = require("dotenv");
dotenv.config()
const resend = new Resend('re_123');
// const resend = new Resend(process.env.RESEND_KEY);
/**
 *
 * @param {String} email - Recevier Email
 * @param {String} subject - Email Subject
 * @param {String} body - Email Body
 */
exports.sendMail = async (email, subject, body) => {
  try {
    const data = await resend.emails.send({
      from: "noreply <hello@ayobami.com.ng>",
      to: email,
      subject: subject,
      html: body,
    });
    // Add Logger
    console.log("Mail sent =>", data);

  } catch (error) {
    // Add Logger
    console.log("Mail Failed =>", error);
  }
};
