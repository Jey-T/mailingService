import transporter from "../clients/transporter";
import { messageSchema } from "../schemas/message";
import { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "./errors";

export default async function sendMail(req: Request, res: Response, next: NextFunction) {
  const result = messageSchema.safeParse(req.body);

  if (!result.success) {
    throw new ValidationError("Invalid request");
  }

  const { name, email, message } = result.data;

  try {
    const mailResult = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "New message from " + name,
      text: `Name: ${name}${email ? `\nEmail: ${email}` : ""}\n${message}`,
    });

    if (mailResult.rejected.length > 0) {
      console.log("Mail rejected");
      throw new AppError("Mail rejected", 500);
    }

    console.log("Mail sent successfully");
    return res.status(200).json({ message: "Mail sent successfully" });

  } catch (error) {

    console.log(error);
    console.log("Failed to send mail");
    throw new AppError("Failed to send mail", 500);

  }
}
