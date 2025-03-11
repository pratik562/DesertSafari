"use client";
import { logo2 } from "@/assests";
import toast from "react-hot-toast";

export const handleToast = (type, message) => {
  const styles = {
    success: { background: "#4caf50", color: "#fff" },
    error: { background: "#f44336", color: "#fff" },
    info: { background: "#2196f3", color: "#fff" },
    warning: { background: "#ff9800", color: "#fff" },
    default: { background: "#333", color: "#fff" }, 
  };

  toast[type] ? toast[type](message, { duration: 3000, position: "top-center", style: styles[type] || styles.default }) 
              : toast(message, { duration: 3000, position: "top-center", style: styles.default });
};


export const validatePhone = (phone) => {
  return /^[0-9]{10}$/.test(phone) ? "" : "Please enter a valid 10-digit phone number.";
};


export const validateOtp = (otp) => {
  return /^[0-9]{6}$/.test(otp) ? "" : "Please enter a valid 6-digit OTP.";
};


export const validateForm = (data) => {
  let errors = {};

  if (!data.fullName?.trim()) errors.fullName = "Full Name is required.";
  if (!data.subject?.trim()) errors.subject = "Subject is required.";
  
  if (!data.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Invalid email format.";
  }

  if (!data.mobile?.trim()) {
  
    errors.mobile = "Mobile number is required.";
  } else if (!/^\d{10}$/.test(data.mobile)) {
    errors.mobile = "Enter a valid 10-digit number.";
  }
  console.log(errors)
  return errors;
};

export const sendEmail = async (formData) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: 'pratikvaghasiya562@gmail.com',
        subject: `New Contact Form Submission from ${formData.fullName}`,
        body: generateEmailTemplate(formData),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email");
    }
    handleToast('success', 'Your message has been sent successfully!')
  } catch (error) {
    console.error("Email sending failed:", error);
    handleToast('error', 'Failed to send email. Please try again.')
  }
};

const generateEmailTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; background: #fff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">

      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src=${logo2} alt="Company Logo" style="max-width: 150px;">
      </div>

      <!-- Title -->
      <h2 style="color: #c0392b; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>

      <!-- Form Data -->
      <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #fafafa;">
        <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Full Name:</strong> ${data.fullName}</p>
        <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
        <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
        <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Mobile:</strong> ${data.mobile}</p>
      </div>

      <!-- Footer -->
      <p style="text-align: center; margin-top: 20px; color: #777; font-size: 14px;">
        Sent from your website contact form.
      </p>

    </div>
  </div>
`;

