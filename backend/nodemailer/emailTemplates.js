export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #ff3223, #ff20c7); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 0 5px rgba(0,0,0,0.1);">

    <!-- Header Image Section -->
    <div style="position: relative; height: 220px; overflow: hidden; border-radius: 6px 6px 0 0;">
      <img src="https://i.pinimg.com/736x/86/c1/7c/86c17c9075a6e9b25dbff250b7573f0c.jpg" alt="Header Image" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; background: rgba(0,0,0,0.4);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; padding: 0 20px;">
        <h4 style="font-size: 22px; margin: 0 0 10px;">THANK YOU FOR JOINING US, <strong>{userName}</strong></h4>
        <p style="font-size: 14px; margin: 0;">Discover original Art with a story to tell.</p>
        <p style="font-size: 14px; margin: 5px 0;">Buy, share and create.</p>
        <a href="#" style="margin-top: 12px; display: inline-block; padding: 10px 24px; background-color: #30ad64; border-radius: 4px; color: white; text-decoration: none; font-weight: bold;">Explore</a>
      </div>
    </div>

    <!-- Welcome Text Section -->
    <div style="padding: 30px 20px; text-align: center;">
      <h3 style="text-transform: uppercase; font-size: 20px; color: #3ead30; margin-bottom: 10px;">Welcome, <strong>{userName}</strong></h3>
      <p style="font-size: 15px; color: #444;">Your registered email: <strong>{email}</strong></p>
    </div>

    <!-- Footer Section -->
    <div style="background-color: #f9f9f9; padding: 20px; font-size: 13px; color: #4F5E66; text-align: center;">
      <div style="margin-bottom: 10px;">
        <a href="#" style="color: #4F5E66; text-decoration: none; margin-right: 10px;">Unsubscribe</a> |
        <a href="#" style="color: #4F5E66; text-decoration: none; margin: 0 10px;">Contact Us</a> |
        <a href="#" style="color: #4F5E66; text-decoration: none; margin-left: 10px;">Privacy Policy</a>
      </div>
      <p>This email was sent to: <strong>{email}</strong></p>
      <p>© 2025-2026 Amit. All Rights Reserved.</p>
      <p>Sativali, Vasai [E], Maharashtra 401208, INDIA</p>
    </div>

  </div>

`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #ff2929, #ff2ca0); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;