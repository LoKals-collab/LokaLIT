import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/site";

export async function POST(req: NextRequest) {
  const { name, email, experienceName, motivation } = await req.json();

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "name_required" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "email_invalid" }, { status: 400 });
  }

  const isBooking = typeof experienceName === "string" && experienceName.trim().length > 0;
  const motivationLine =
    isBooking && typeof motivation === "string" && motivation.trim().length > 0
      ? motivation.trim()
      : null;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Lokalit" <${process.env.SMTP_USER}>`,
    to: CONTACT_EMAIL,
    subject: isBooking
      ? `Interesse prenotazione: ${name.trim()} → ${experienceName.trim()}`
      : `Nuova iscrizione: ${name.trim()}`,
    text: isBooking
      ? `Nome: ${name.trim()}\nEmail: ${email.trim()}\nEsperienza: ${experienceName.trim()}${motivationLine ? `\nMotivazione: ${motivationLine}` : ""}`
      : `Nome: ${name.trim()}\nEmail: ${email.trim()}`,
    html: isBooking
      ? `<p><strong>Nome:</strong> ${name.trim()}</p><p><strong>Email:</strong> ${email.trim()}</p><p><strong>Esperienza:</strong> ${experienceName.trim()}</p>${motivationLine ? `<p><strong>Motivazione:</strong> ${motivationLine}</p>` : ""}`
      : `<p><strong>Nome:</strong> ${name.trim()}</p><p><strong>Email:</strong> ${email.trim()}</p>`,
  });

  return NextResponse.json({ ok: true });
}
