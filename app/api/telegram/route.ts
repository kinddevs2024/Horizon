import { NextResponse } from "next/server";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  interest: z.string().min(2, "Select what you need"),
  message: z.string().min(10, "Add a short message"),
});

export async function POST(request: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram configuration is missing");
      return NextResponse.json(
        { success: false, message: "Telegram configuration is missing. Please contact support." },
        { status: 500 },
      );
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch (error) {
      console.error("Invalid JSON body:", error);
      return NextResponse.json(
        { success: false, message: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const result = submissionSchema.safeParse(payload);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, company, interest, message } = result.data;

    const composed = [
      "New Horizon inquiry",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Interest: ${interest}`,
      "Message:",
      message,
    ].join("\n");

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: composed }),
        },
      );

      if (!telegramResponse.ok) {
        const errorText = await telegramResponse.text();
        console.error("Telegram API error:", errorText);
        return NextResponse.json(
          {
            success: false,
            message: "Could not deliver to Telegram. Please try again later.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Fetch error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Network error. Please try again later.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected error in POST handler:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}
