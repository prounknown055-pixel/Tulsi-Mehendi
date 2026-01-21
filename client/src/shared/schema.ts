import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
