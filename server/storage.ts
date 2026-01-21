import { db } from "./db";
import { inquiries, siteSettings, type InsertInquiry, type Inquiry, type SiteSettings, type UpdateSettings } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getSettings(): Promise<SiteSettings>;
  updateSettings(settings: UpdateSettings): Promise<SiteSettings>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getSettings(): Promise<SiteSettings> {
    const [settings] = await db.select().from(siteSettings).limit(1);
    if (!settings) {
      const [newSettings] = await db.insert(siteSettings).values({}).returning();
      return newSettings;
    }
    return settings;
  }

  async updateSettings(updates: UpdateSettings): Promise<SiteSettings> {
    const current = await this.getSettings();
    const [updated] = await db
      .update(siteSettings)
      .set(updates)
      .where(eq(siteSettings.id, current.id))
      .returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
