// backend/resend/emails.js
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { transporter, sender } from "./nodemailer.config.js";

// 🔹 Send verification email
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Verify Your Email",
      html: htmlContent,
    });

    console.log("Verification email sent:", response.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send verification email");
  }
};

// 🔹 Send welcome email
export const sendWelcomeEmail = async (userName, email) => {
  if (!email || typeof email !== "string") {
    throw new Error("Invalid email address");
  }

  try {
    const htmlContent = WELCOME_EMAIL_TEMPLATE
      .replace(/{userName}/g, userName)
      .replace(/{email}/g, email);

    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Welcome to Our Service",
      html: htmlContent,
    });

    console.log("Welcome email sent:", response.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(`Failed to send welcome email: ${error.message}`);
  }
};

// 🔹 Send password reset email
export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const htmlContent = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL);

    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Reset Your Password",
      html: htmlContent,
    });

    console.log("Password reset request email sent:", response.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
};

// 🔹 Send password reset success email
export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset success email sent:", response.messageId);
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error(`Failed to send password reset success email: ${error.message}`);
  }
};