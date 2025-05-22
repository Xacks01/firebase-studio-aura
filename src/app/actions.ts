"use server";

import { z } from "zod";

const emailSchema = z.string().email({ message: "Invalid email address." });

export interface NewsletterSubscribeState {
  message: string;
  success: boolean;
}

export async function subscribeToNewsletter(
  prevState: NewsletterSubscribeState | undefined,
  formData: FormData
): Promise<NewsletterSubscribeState> {
  const email = formData.get("email");
  const validatedEmail = emailSchema.safeParse(email);

  if (!validatedEmail.success) {
    return {
      message: validatedEmail.error.errors.map(e => e.message).join(", "),
      success: false,
    };
  }

  // Simulate API call
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Subscribed with email:", validatedEmail.data);
    return {
      message: "Successfully subscribed! Thank you for joining us.",
      success: true,
    };
  } catch (error) {
    return {
      message: "Subscription failed. Please try again later.",
      success: false,
    };
  }
}
