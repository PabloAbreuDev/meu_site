import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: "pabloabreu.contato@gmail.com",
        subject: `Contato de ${name}`,
        html: `<p>Você recebeu um contato</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Telefone: </strong> ${phone}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }

  return res.status(200).json({ error: "" });
};
