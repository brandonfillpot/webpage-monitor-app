import { Request, Response } from "express";

export const getMetrics = (req: Request, res: Response) => {
  const metrics = {
    memoryUsage: process.memoryUsage(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };

  res.json(metrics);
};
