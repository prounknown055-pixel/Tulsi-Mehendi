import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  whatsapp: text("whatsapp").notNull().default("910000000000"),
  instagram: text("instagram").notNull().default(""),
  facebook: text("facebook").notNull().default(""),
  youtube: text("youtube").notNull().default(""),
  pinterest: text("pinterest").notNull().default(""),
  telegram: text("telegram").notNull().default(""),
  galleryImages: jsonb("gallery_images").notNull().default([]),
  offers: text("offers").notNull().default(""),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  message: true,
});

export const updateSettingsSchema = createInsertSchema(siteSettings).partial();

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type SiteSettings = typeof siteSettings.$inferSelect;
export type UpdateSettings = z.infer<typeof updateSettingsSchema>;
