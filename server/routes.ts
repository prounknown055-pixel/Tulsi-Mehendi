import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Minimal API route for contact form (optional, as per requirements mainly static)
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get(api.settings.get.path, async (_req, res) => {
    const settings = await storage.getSettings();
    res.json(settings);
  });

  app.patch(api.settings.update.path, async (req, res) => {
    try {
      const input = api.settings.update.input.parse(req.body);
      const settings = await storage.updateSettings(input);
      res.json(settings);
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}
