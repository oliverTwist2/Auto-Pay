const Resend = require("resend");
const resend = new Resend(process.env.RESEND_KEY);

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
    // Add Loger
  } catch (error) {
    // Add Logger
  }
};
