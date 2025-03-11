import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, body } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"OpuloTech" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: body,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully", info }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, message: "Email sending failed", error: error.message }, { status: 500 });
  }
}
