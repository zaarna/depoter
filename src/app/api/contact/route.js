import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = (process.env.CONTACT_RECIPIENTS || "")
  .split(",")
  .filter(Boolean);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data) {
  const rows = [
    ["Full Name", data.fullName],
    ["Work Email", data.email],
    ["Country", data.country],
    ["Phone", data.phone],
    ["Company / Brand", data.company],
    ["Website", data.website || "-"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:600;color:#4C4536;white-space:nowrap;">${escapeHtml(
          label,
        )}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#212121;">${escapeHtml(
          value,
        )}</td>
      </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#212121;">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        ${rowsHtml}
      </table>
      <div style="margin-top:20px;">
        <p style="font-weight:600;color:#4C4536;margin-bottom:6px;">Description</p>
        <p style="white-space:pre-wrap;color:#212121;background:#FFF7E6;padding:14px;border-radius:8px;">
          ${escapeHtml(data.description || "-")}
        </p>
      </div>
    </div>
  `;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, country, phone, company, website, description } =
      body;
    console.log("SMTP_HOST is:", process.env.SMTP_HOST);
    // Basic server-side validation (client already validates, but never trust the client)
    if (!fullName || !email || !country || !phone || !company) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Depoter Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENTS,
      replyTo: email,
      subject: `New Contact Form Submission - ${company}`,
      html: buildEmailHtml({
        fullName,
        email,
        country,
        phone,
        company,
        website,
        description,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Submitted Successfully",
    });
  } catch (error) {
    console.error("=========== API ERROR ===========");
    console.error(error);
    console.error(error.message);
    console.error(error.stack);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
